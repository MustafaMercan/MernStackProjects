const express = require('express');
const cors = require('cors');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

app.get('/', (req, res) => {
    res.send("chat api");
})
const users = {}
const rooms = {}

io.on('connection', (socket) => {
    console.log(`a user connected : ${socket.id}`);

    socket.on('disconnect',() => {
        console.log(`a user disconnect:${socket.id}`)
        const user = users[socket.id];
        if(user){
            io.to(user?.roomName).emit('roomInformation',{message:`${socket?.id} leaving to room...`});
            console.log('user odadan ayrildi')
        }
    })
    socket.on('create-something',(data) => {
        console.log(data);
        io.emit('foo',data);
    })
    socket.on('create-room',(data) => {
        const {userName,roomName} = data;
        if(roomName && userName){
            socket.join(roomName);
            users[socket.id] = {userName, roomName};
            io.to(roomName).emit('roomInformation',{message:`${userName} created to ${roomName}`})
        }
    })

})


server.listen(3000, () => {
    console.log('server is running on port:3000');
})