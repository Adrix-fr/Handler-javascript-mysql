const { Client } = require('discord.js');
const { readdirSync } = require('fs');

/**
 * @param {Client} client
 */
module.exports = async (client) => {
const commandFolders = readdirSync('./Command');
for(const folder of commandFolders){
    const commandFiles = readdirSync(`./Command/${folder}`).filter(files => files.endsWith('.js'))
    for(const file of commandFiles){
        const command = require(`../../Command/${folder}/${file}`);
        client.commands.set(command.name, command)
    }
}

}