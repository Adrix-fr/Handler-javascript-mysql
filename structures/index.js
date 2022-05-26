const { Client, Collection } = require('discord.js');
const client = new Client({intents: 32767})
const config = require('./config.json')
const mysql = require('mysql')

const Adrix_bot = mysql.createConnection({
    host: config.DB.host,
    user: config.DB.user,
    database: config.DB.database,
    password: config.DB.password
})

Adrix_bot.connect(function(err) {
    if(err) throw err;

    console.log(`Connection à la database ${config.DB.database} réussi !`)
})

client.commands = new Collection();

require('./handlers/Events')(client)
require('./handlers/Commands')(client)

module.exports = client
client.login(config.Token)