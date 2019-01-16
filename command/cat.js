const { get } = require('snekfetch')
exports.run = async (Discord, client, message, args) => {
    let roleColor = message.member.highestRole.color
    try {
        get('https://aws.random.cat/meow').then(res => {
            const embed = new Discord.RichEmbed()
            .setColor(roleColor)
            .setImage(res.body.file)
            return message.channel.send({embed});
        });
    } catch(err) {
        return message.channel.send(error.stack);
}
}
