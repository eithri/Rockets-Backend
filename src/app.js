import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import {createProofTypes, createRoles, createUnitMeasures} from './libs/initialSetup.js'
import playerRoutes from './routes/player.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import proofRoutes from './routes/proof.routes.js'
import playBookRoutes from './routes/playbook.routes.js'
import playRoutes from './routes/play.routes.js'
import statisticRoutes from './routes/statistic.routes.js'
import cors from 'cors';

const app = express()
createRoles();
createProofTypes();
createUnitMeasures();

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/players',playerRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/proofs',proofRoutes)
app.use('/api/playbook',playBookRoutes)
app.use('/api/play',playRoutes)
app.use('/api/statistic',statisticRoutes)

export default app;
