const Discord = require("discord.js")

/*Configuration files*/
const botconfig = require("../../botconfig.json");
const config = require("../../data/config.json");

/*Data files*/
const colors = require("../../data/colors.json");
const roles = require("../../data/roles.json");

/*Helper classes*/
const music = require("../../helperClasses/music.js");

module.exports.run = async (bot, message, args) => 
{

    if(!message.member.roles.find(r => r.id === roles.dj))
	{ 
		message.channel.send("> You do not have the right permissions to use this command. If you wish to use the music command ask a moderator to give you the DJ role.");
		return;
    }
    const serverLogs = bot.channels.get(config.serverLogs);
    const serverQueue = music.queue.get(message.guild.id);
    
    typeof music.excecute(message, bot, serverLogs);
}

module.exports.config = 
{
    name: "play",
    aliases: [],
    usage: "-usage",
    description: "Play a song in the voice chat",
    accessableby: "DJ"
}