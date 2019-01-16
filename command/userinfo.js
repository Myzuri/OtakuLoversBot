const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {
      
      let roleColor = message.member.highestRole.color;
      let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
      .setColor(roleColor)
      .setTitle("Here some info about " + `${user.tag}`)
      .setThumbnail(user.displayAvatarURL)
      .addField("Etat", user.presence.status, true)
      .addField("ID", user.id, true)
      .addField('Role', user.roles.map(u=>u.name))
      .setDescription('[full image]('+user.avatarURL+')')
      //.addField("Joue a ", "\`" + user.presence.game.name + "\`")
      .setFooter("Account created at : ")
      .setTimestamp(user.createdAt)
      return message.channel.send(embed)

}


