module.exports.run = async (Discord, client, message, args) =>  {

  var msglength = args[0];

//  if(!message.member.hasPermissions('MANAGE_MESSAGES')) return message.channel.sendMessage("You don't have enough perms")


	if (message.channel.type == 'text') {
    var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.addField('Message delete !', 'Amount of deleted messages: `' +msglength+'`')
      .setThumbnail(message.author.displayAvatarURL)
      
   let msgpurged = await message.channel.bulkDelete(msglength).then(() => {
      message.channel.send(embed).then(msg => msg.delete(10000));
			
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
});
}
}