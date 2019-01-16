
module.exports.run = async (Discord, client, message, args) => {

	const emote = client.emojis.find(e=> e.name === 'ULTRAPADORU')

	let opp = message.mentions.users.first();

	if(!opp) return message.channel.send('No opponent provide');

	if(opp == message.author) return message.channel.send('What were you tryin')

	let embedGame = new Discord.RichEmbed()

	.addField('React to make your choice', '🌑 = Rock | 🗞 = Paper | ✂ = Scissors')
	.addBlankField()
	.addField("You're time is remaining", "I forgot to tell, you got only 60 sec to react"+ emote)

	const gameSend = await message.author.send(embedGame)
	gameSend.react('🌑');
	gameSend.react('🗞');
	gameSend.react('✂');
	
	const rockFilter = (reaction, user) => reaction.emoji.name === '🌑' && user.id === message.author.id && user.id !== user.bot.id;
	const rockCollec = gameSend.createReactionCollector(rockFilter, {max:1, time: 60000 });

	rockCollec.on('collect', r => {
		message.channel.send(message.author.tag+' choose Rock');paperCollec.stop();scissorsCollec.stop();});

	const paperFilter = (reaction, user) => reaction.emoji.name === '🗞' && user.id === message.author.id;
	const paperCollec = gameSend.createReactionCollector(paperFilter, {max:1, time: 60000 });

	paperCollec.on('collect', r => {message.channel.send(message.author.tag+' choose Paper');rockCollec.stop();scissorsCollec.stop();});

	const scissorsFilter = (reaction, user) => reaction.emoji.name === '✂' && user.id === message.author.id;
	const scissorsCollec = gameSend.createReactionCollector(scissorsFilter, {max:1, time: 60000 });

	scissorsCollec.on('collect', r => {message.channel.send(message.author.tag+' choose Scissors');paperCollec.stop();rockCollec.stop();});

	const gameOpp = await opp.send(embedGame)
	gameOpp.react('🌑');
	gameOpp.react('🗞');
	gameOpp.react('✂');


	const rockFilterOpp = (reaction, user) => reaction.emoji.name === '🌑' && user.id === opp.id;
	const rockCollecOpp = gameOpp.createReactionCollector(rockFilterOpp, {max:1, time: 60000 });

	rockCollecOpp.on('collect', r => {message.channel.send(opp.tag+' choose Rock');paperCollecOpp.stop();scissorsCollecOpp.stop();});

	const paperFilterOpp = (reaction, user) => reaction.emoji.name === '🗞' && user.id === opp.id;
	const paperCollecOpp = gameOpp.createReactionCollector(paperFilterOpp, {max:1, time: 60000 });

	paperCollecOpp.on('collect', r => {message.channel.send(opp.tag+' choose Paper');rockCollecOpp.stop();scissorsCollecOpp.stop();});

	const scissorsFilterOpp = (reaction, user) => reaction.emoji.name === '✂' && user.id === opp.id;
	const scissorsCollecOpp = gameOpp.createReactionCollector(scissorsFilterOpp, {max:1, time: 60000 });

	scissorsCollecOpp.on('collect', r => {message.channel.send(opp.tag+' choose Scissors');paperCollecOpp.stop();rockCollecOpp.stop();});
	

	

}