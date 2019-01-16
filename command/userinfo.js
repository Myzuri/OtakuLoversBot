const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {

      let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Here some info about " + `${user.tag}`)
      .setThumbnail(user.displayAvatarURL)
      .addField("Etat", user.presence.status, true)
      .addField("ID", user.id, true)
      .setDescription('[full image]('+user.avatarURL+')')
      //.addField("Joue a ", "\`" + user.presence.game.name + "\`")
      .setFooter("Account created at : ")
      .setTimestamp(user.createdAt)
      return message.channel.send(embed)

}


