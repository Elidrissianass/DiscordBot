const { Client } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
const client = new Client();
const PREFIX = "!"
client.login(token);
client.on('message',(message)=>{
    const channel = message.channel.name;
    if(channel === 'bot-channel' && !message.content.startsWith(PREFIX)){
        message.delete();
        message.reply('didnt i tell you about not nagging around, just vibe in to the music or I BONK YOU !!').then(sentMessage => sentMessage.delete({ timeout: 10000 }));
    }
    if(channel !== 'bot-channel' && message.content.startsWith(PREFIX))
    {
        message.delete();
        message.reply('dont anger ur Daddy now, go to the bot channel !!').then(sentMessage => sentMessage.delete({ timeout: 10000 }));
    }
})