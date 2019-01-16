module.exports.run = async (Discord, client, message, args) =>  {

	var user = message.mentions.users.first();
	var author;

	if(user){
		var author = user;

		let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setDescription(`${message.author.username} a tué ${author.username}`)
		.setImage(randompic())
		return message.channel.send(embed)

	} else if(author){
		var author = message.author;
		return message.channel.send("```!slain @user \n\n ----------- \n\n Tuer quelqu'un que vous n'aimez pas```")
	} else if(author){
		var author = message.user

	}

	function randompic() {
		var randomkill = ['http://78.media.tumblr.com/96621d427247aa378c700405d4a9446e/tumblr_na3y2gOeXc1toqhwfo1_500.gif', 'http://78.media.tumblr.com/0fe144fc6ff8efd4461d3b70c91c1622/tumblr_n8nwh8vzDR1r2rp33o1_500.gif', 'http://78.media.tumblr.com/b2996aeab5edca82a4c0a4fd81918728/tumblr_n8eosuDsd71s5mlsio1_500.gif', 'http://78.media.tumblr.com/c4e8608c8c7de278c4a08783692621d0/tumblr_n8tjf2hG4A1r7o0z3o2_r1_400.gif', 'http://78.media.tumblr.com/31a1447092be8828bf2a3acc785d0445/tumblr_namo6b0DYm1rovatgo1_500.gif']

		
		return randomkill[Math.floor(Math.random()*randomkill.length)];
	}

}
