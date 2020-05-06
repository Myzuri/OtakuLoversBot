module.exports.run = async (Discord, client, message, args) =>  {

  var msglength = args[0];
  let roleColor = message.member.highestRole.color;
  if(!message.member.hasPermissions('MANAGE_MESSAGES') /*and message.author != "498479906439823370"*/) return message.channel.sendMessage("You don't have enough perms")
  //if(msglength == NaN) return message.channel.sendMessage("Please enter a **number**")


	if (message.channel.type == 'text') {
    var embed = new Discord.RichEmbed()
    		.setColor(roleColor)
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
