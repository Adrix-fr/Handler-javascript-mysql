const { Message, Client, Discord } = require('discord.js');
const { Prefix }= require('../../structures/config.json');

module.exports = {
    name: "messageCreate",

    /**
     * 
     * @param {Message} message 
     * @param {Client} client 
     */
    async execute(message, client){
if(!message.content.startsWith(Prefix) || message.author.bot) return;

const args = message.content.slice(Prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName) ||
client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    try{
        command.execute(message, args, commandName, client, Discord);
    } catch (error){
        return;
    }   
    }
}