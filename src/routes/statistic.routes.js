import {Router} from 'express'
const router = Router()

import * as statisticsCtrl from '../controllers/statistics.controller.js'
import {authJwt} from '../middlewares/index.js'

router.get('/category', [authJwt.verifyToken , authJwt.isAdmin], statisticsCtrl.getStatisticsByCategory)
router.get('/category/proof/:typeProof', [authJwt.verifyToken , authJwt.isAdmin], statisticsCtrl.getStatisticsByProof)

export default router;