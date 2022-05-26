const {
    Client
} = require('discord.js');

module.exports = {
    name: "ready",
    description: "L'event ready du bot",
    once: true,

    /**
     * @param {Client} client 
     */
    execute(client) {
        console.log(`${client.user.tag} est maintenant en ligne ✅`)
        client.user.setActivity("github.com/Adrix-fr", {type: "WATCHING"})
    }
}