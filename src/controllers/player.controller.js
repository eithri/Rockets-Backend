import Player from '../models/Player.js'
import User from '../models/User.js'
import Role from '../models/Role.js'


export const createPlayer = async (req, res, next) => {

    try {
        const { imgUrl, name, lastName, gender, birthday, documentId, phone, address, position, height, weight, eps } = req.body;

        req.body.username = name+documentId
        req.body.password = documentId

        const { username, email, password, roles } = req.body;

        const newUser = new User(
            {
                username,
                email,
                password: await User.encryptPassword(password)
            }
        )

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.find({ name: "user" })
            newUser.roles = [role[0]._id];
        }

        const savedUser = await newUser.save();
        const user = savedUser._id

        
        const newPlayer = new Player({ imgUrl, name, lastName, gender, birthday, documentId, phone, address, position, height, weight, eps, user })

        const playerSaved = await newPlayer.save()

        next()

    } catch (error) {
        console.log(error)
    }
}

export const getPlayers = async (req, res) => {
    const players = await Player.find();
    const users = await User.populate(players, {path:'user'})
    res.json(users)
}

export const getPlayerById = async (req, res) => {
    const players = await Player.findById(req.params.playerId);
    const user = await User.populate(players, {path:'user'})
    console.log(user)
    res.status(200).json(user)
}

export const updatePlayerById = async (req, res) => {
    const updatePlayer = await Player.findByIdAndUpdate(req.params.playerId, req.body,
        { new: true }
    );
    const updateUser = await User.findByIdAndUpdate(updatePlayer.user, req.body,
        { new: true }
    );

    res.status(200).json(updatePlayer)
}

export const deletePlayerById = async (req, res) => {
    const { playerId } = req.params;
    await Player.findByIdAndDelete(playerId)
    res.status(204).json()
}