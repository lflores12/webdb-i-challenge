const express = require('express');

 const Accounts = require('./data/accounts-model.js');


const server = express();

// your code here


server.use(express.json());

server.get('/', (req, res ) => {
    res.send(
        "<h1>Accounts Database</h1>"
    )
});

server.get('/api/accounts', async (req, res) => {
    try {
        const accounts = await Accounts.find(req.query);
        res.status(200).json(accounts);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving accounts'
        });
    }
});

server.get('/api/accounts/:id', async (req, res) => {
    try {
        const account = await Accounts.findById(req.params.id);
        res.status(200).json(account);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving that specific account"
        });
    }
});

server.post('/api/accounts', async (req, res) => {
    try {
        const newAccount = await Accounts.add(req.body);
        res.status(201).json(newAccount);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error adding new account"
        });
    }
});



module.exports = server;