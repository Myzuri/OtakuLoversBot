const Discord = require('discord.js')

module.exports.run = async (client, args, message) => {

    let roleColor = message.member.highestRole.color;
    let sembed = new Discord.RichEmbed()
    .setTitle("Here's some infos about the server, "  + `**${message.author.tag}**`)
    .setDescription('[Server img link}('+message.guild.iconURL+')')
    .setColor(roleColor)
    .setThumbnail(message.guild.iconURL)
    .addField("Server name", message.guild.name, true)
    .addField("Total members", message.guild.memberCount, true)
    .addField("Total (without bot)", checkMembers(message.guild))
    .addField("Owner", `\`${message.guild.owner.user.tag}\``, true)
    .addField("Region", message.guild.region, true)
    .addField("Roles", checkRole(message.guild))
    .addField("Total channel", message.guild.channels.size, true)
    .addField("Server ID", message.guild.id, true)
    .setFooter("Serveur created at:")
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


