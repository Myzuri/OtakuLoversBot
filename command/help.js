const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {
    let roleColor = message.member.highestRole.color
    let user = message.author;
    let sembed = new Discord.RichEmbed()
    .setTitle("My commands")
    .addField('Fun', '`avatar`, `ascii`, `calc`, `ping`, `cat`, `shifumi (WIP)`, `hug`, `8ball`, `kiss`, `pat`, `pic`, `slain (WIP)`, `dab`, `jr`')
    .addField('Usefull', '`userinfo`, `serverinfo`, `purge`')
    .setColor(roleColor)

    //.setTimestamp(message.guild.createdAt);
    return message.channel.send(sembed);
}


