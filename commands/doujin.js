const Discord = require('discord.js')

module.exports = {
    name: 'code',
    description: '',
    cooldown: 1, //optional
    aliases: [], //optional...leave the array empty
    async execute(client, message, args) {
        var code = args[0]
        message.channel.send(`https://nhentai.net/g/${code}`)
    }
}