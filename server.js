const express = require('express');


const server = express();

// your code here


server.use(express.json());

server.get('/', (req, res ) => {
    res.send(
        "<h1>Accounts Database</h1>"
    )
});



module.exports = server;