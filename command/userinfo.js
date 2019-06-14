const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {
      
      let roleColor = message.member.highestRole.color;
      let user = message.mentions.users.first() || message.author;
      let embed = new Discord.RichEmbed()
      .setColor(roleColor)
      .setTitle("Here some info about " + `${user.tag}`)
      .setThumbnail(user.displayAvatarURL)
      .addField("Status", giveMeAStatus(user.presence.status), true)
      .addField("ID", user.id, true)
      .setDescription('[full image]('+user.avatarURL+')')
      .addField("Game", "\`" + gamePlaying(user.presence.game) + "\`")
      .setFooter("Account created at : ")
      .setTimestamp(user.createdAt)
      return message.channel.send(embed);
      
            function giveMeAStatus(basic) {
            if(basic === 'dnd') return 'Do not disturb';
            if(basic === 'offline') return 'Offline';
            if(basic === 'online') return 'Online';
            if(basic === 'idle') return 'Idle';
      }

      function gamePlaying(gameOn) {
            if(gameOn === null) return 'Isn\'t playing a game';
            else {
                  return user.presence.game.name;
            }
      }
}


