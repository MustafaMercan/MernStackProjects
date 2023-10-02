const express = require('express');
const {registerController,loginController, getUsers, getUser} = require('../controllers/userController')
const {createChatController,chatsController} = require('../controllers/chatController')
const router = express.Router();


router.post('/register',registerController) //user register
router.post('/login',loginController); //user login


router.get('/users',getUsers)
router.get('/user/:id',getUser);

router.get('/chats/:id',chatsController);


router.post('/createchat',createChatController)



module.exports = {
    router
}