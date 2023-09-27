const chatModel = require('../models/chatModel');


const createChatController = async(req,res) => {
    const {members} = req.body;
    const chat = await chatModel({members}).save();
    res.status(200).json({message:"Chat created."});
}

const chatsController = async(req,res) => {

    const currentID = req.params.id;
    const chats = await chatModel.find({
        "members":{
            $in:[currentID]
        }
    })

    res.status(200).json(chats);
}
module.exports = {
    createChatController,
    chatsController
}