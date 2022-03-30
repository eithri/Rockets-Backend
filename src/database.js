import "dotenv/config";
import mongoose from 'mongoose'

const { MONGO_DB_URI } = process.env
const connection = MONGO_DB_URI

mongoose.connect(connection,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(db=> console.log('Db is connected'))
    .catch(error=> console.log(error))