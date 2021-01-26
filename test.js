const Discord = require("discord.js"),
client = new Discord.Client(),
settings = {
    prefix: "e!",
    token: "NzY3MjQwMDk4OTY5NTUwODg4.X4vCBg.yFQta8epD4lemMil-K7VpGWr0w4"
};

const { Player } = require("discord-player");
// Create a new Player (you don't need any API Key)
const player = new Player(client);
// To easily access the player
client.player = player;


client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", async (message) => {

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // !play Despacito
    // will play "Despacito" in the member voice channel

    if(command === "play"){
        let track = await client.player.play(message, args[0], message.member.user.tag)
        message.channel.send(`playing ${track.name}! - requested by ${track.requestedBy}`)
    }

    if(command === 'stop') {
        let track = await client.player.stop(message)
    }

});

client.login(settings.token);