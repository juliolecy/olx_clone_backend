const express = require('express')
const router = express.Router();
const Auth = require('./middlewares/Auth')
const AuthValidator = require('./validators/AuthValidator')

const AuthController = require('./controllers/AuthController')
const AdsController = require('./controllers/AdsController')
const UserController = require('./controllers/UserController')

router.get('/ping', (req, res)=>{
    res.json({pong: true})
})
//States
router.get('/states', Auth.private, UserController.getStates) //Private
//User
router.post('/user/signin', AthValidator.signin, AuthController.signin)
router.post('/user/signup',AuthValidator.signup, AuthController.signup)
router.get('/user/me',Auth.private, UserController.info) //Private
router.put('/user/me', Auth.private, UserController.editAction) //Private
//Categories
router.get('/categories', AdsController.getCategories);
//Ad
router.post('./ad/add',Auth.private, AdsController.addAction) //Private
router.get('./ad/list', AdsController.getList)
router.get('./ad/item', AdsController.getItem)
router.post('./ad/:id',Auth.private, AdsController.editAction) //Private

module.exports = router