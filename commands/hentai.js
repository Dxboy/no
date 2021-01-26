const nhentai = require('nhentai-js')

module.exports = {
    name: 'hentai',
    description: '',
    cooldown: 1, //optional
    aliases: [], //optional...leave the array empty
    async execute(client, message, args) {
        if(nhentai.exists('147476')) { // checks if doujin exists
            const dojin = await nhentai.getDoujin('147476')
            console.log(dojin);
        }
    }
}