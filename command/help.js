const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {

    let user = message.author;
    let sembed = new Discord.RichEmbed()
    .setTitle("My commands")
    .addField('Fun', '`avatar`, `ascii`, `calc`, `ping`, `cat`, `shifumi`, `hug`, `8ball`')
    .addField('Usefull', '`userinfo`, `serverinfo`')
    .setColor('RANDOM')

    //.setTimestamp(message.guild.createdAt);
    return message.channel.send(sembed);
}


