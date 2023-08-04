const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

/**
 * This code (express.static) indicates the starting point of all requests coming from the client. When a client requests anything from the
 * server's root directory, the Express server searches for that request in the "public" directory and servers the appropriate file. This way, it allows 
 * you quickly serve static files (such as HTML,CSS,images) to the client.
 */
app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/',require('./routes/root'));

app.all('*',(req,res) => {
    res.status(404);
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'));
    }else if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    }else{
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT,() => {
    console.log(`Server Listening on ${PORT}.`)
})