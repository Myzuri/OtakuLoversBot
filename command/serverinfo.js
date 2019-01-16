const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {


    let sembed = new Discord.RichEmbed()
    .setDescription("Voici les infos du serveur "  + `${message.author.username}`)
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL)
    .addField("Nom du serveur", message.guild.name, true)
    .addField("Total des membres", message.guild.memberCount, true)
    .addField("Total (hors bot)", checkMembers(message.guild))
    .addField("Propriétaire", `\`${message.guild.owner.user.tag}\``, true)
    .addField("Région", message.guild.region, true)
    .addField("Roles", checkRole(message.guild))
    .addField("Total de channel", message.guild.channels.size, true)
    .addField("ID du serveur", message.guild.id, true)
    .setFooter("Serveur créer le:")
    .setTimestamp(message.guild.createdAt);
    return message.channel.send(sembed);


    
function checkRole(guild) {
	let roleCount = 0;
	guild.roles.forEach(role =>{
		if(guild.roles) roleCount++;
	});
	return roleCount;
}

function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++; // If user isn't bot, add 1 to value. 
    });
    return memberCount;
  }
}


