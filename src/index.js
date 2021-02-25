const { Client } = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
const client = new Client();
client.destroy(token);