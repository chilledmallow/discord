const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'v!info') {

       message.reply('Welcome to the server! Thank you so much for joining. The server is about literally everything, it does not specifically have a theme, we just go with the flow of things around here. Just be nice and have fun');

       }
 if (message.content === 'v!help') {
 
 message.reply('Welcome to the help section. 
               We currently only have one command:
               `v!info` - Gives info on the server!}

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
