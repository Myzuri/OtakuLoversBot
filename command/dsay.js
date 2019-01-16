module.exports.run = async (Discord, client, message, args) =>  {

	var say = args.join(' ')

	if(!say [0] || say[0 == 'help']) return message.channel.send("```!dsay [content] \n cannot be empty | don't even try !dsay [!sday]```")
	
		message.delete(1000)
		return message.channel.send(say)
	
}