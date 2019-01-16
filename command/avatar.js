

module.exports.run = async (Discord, client, message, args) => {

	let avuser = message.author;
	let user = message.mentions.users.first();
	let search = args.join(' ');
	let tags = client.users.find(u => u.username === search);
	let roleColor = message.member.highestRole.color;
	var author; // mention to get avatar, or type username
	
		if(user){
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor(roleColor)
			.setDescription(`${user.tag}'s avatar`)
			.setImage(`${user.avatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))

		} if (tags) {
			var author = tags;

			let embed = new Discord.RichEmbed()
			.setColor(roleColor)
			.setDescription(`${tags.tag}'s avatar`)
			.setImage(`${tags.avatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${avuser.tag} used avatar on ${author.tag}`))
		} else {
			var author = message.author;
			let embed = new Discord.RichEmbed()
			.setColor(roleColor)
			.setDescription("Your avatar")
			.setImage(`${author.displayAvatarURL}`)
			return message.channel.send(embed).then(() => console.log(`${message.author.tag} used avatar`))
		
		} 
		
		

}
