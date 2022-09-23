const discord = require('discord.js');

// // //



// // //

const token = process.env.TOKEN;

//

const client = new discord.Client();

//
client.on('message', message => {
    if (!message.author.id == 170639211182030850) return;
    if (message.content == 'nya') {
        message.channel.send('Nya~!')
    };
})

client.on('ready', () => {
        console.log("I'm in");
        console.log(client.user.username);
})

client.login(token);

//

var express = require('express')
var app = express()


app.use(function (req, res, next) {
  res.send('Running!')
})

app.get('/', (req, res) => {
    console.log("Pong!")
    res.send('Hello World!')
})

function keepAlive() { 
    app.listen(3000, ()=>{console.log("Server is Ready!")});
}

keepAlive()