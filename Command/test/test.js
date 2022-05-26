const {
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "test",
    aliases: ["test-bot"],
    description: "Permet de tester le bot",
    /**
     * 
     * @param {Message} message 
     * @param {String[]} args 
     * @param {Client} client 
     */
    async execute(message, args, commandName, client) {
        try {
            const embed = new MessageEmbed()
                .setColor('RED')
                .setDescription('La commande marche parfaitement')

            message.channel.send({
                embeds: [embed]
            })
        } catch (err) {
            console.log(err)
            message.channel.send('une erreur est survenue')
        }

    }
}