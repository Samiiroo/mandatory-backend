const express = require('express');
const app = express();
const io = require('socket.io');
const port = 3030;
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');
const fs = require('fs');
app.use(express.urlencoded({ extended: true }))
//app.use(express.static('views'));

app.use(express.json());
let user;
let chatroom = [];
let messages = [];

app.get("/", (req, res) => {

    res.status(200).send("hello");
  });

app.get('/chat',(req,res)=>{

    res.status(200).end()
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`));