module.exports.run = async (Discord, client, message, args) =>  {

	var say = args.join(' ')

	if(!say [0] || say[0 == 'help']) return message.channel.send("```;say [content] \n cannot be empty | don't even try ;say [;say]```")
	
		message.delete()
		return message.channel.send(say)
	
}
