const express = require('express');
const {createServer} = require('node:http');
const {Server} = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const { router } = require('./routes/router');
const {dbConnect} = require('./db')
dbConnect();
dotenv.config();

let users = []


const app = express();
app.use(express.json())
app.use(cors({
        origin:"http://localhost:5173",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
}));
app.use('/api',router);

const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }
});


io.on('connect',(socket) => {
    console.log(`${socket.id} is connected the socket`)

    socket.on('disconnect',() => {
        console.log(`${socket.id} disconnected from the socket`);
    })
})

const PORT = process.env.PORT || 3000;


app.get('/',(req,res) => {
    res.send('welcome mercan chat api');

})


server.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})
 