const math = require('mathjs')
module.exports.run = async (Discord, client, message, args) => {

	let roleColor = message.member.highestRole.color
	let calcul = args.join(' ');
		try{
			let mathc = math.eval(calcul);
		if(!mathc){
			return message.channel.send('```>calc 1+1 | or other calcul```')
		} else{
			let embed = new Discord.RichEmbed()
			.setColor(roleColor)
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setTitle('I\'m enough smart to know the result UwU')
			.addField('Input', `\`\`\`${calcul}\`\`\``)
			.addField('Output', `\`\`\`${mathc}\`\`\``)
			message.channel.send(embed)
		}
		} catch (error) {
			message.channel.send("It won't work")
			console.log(error)
		}
		
}
	
