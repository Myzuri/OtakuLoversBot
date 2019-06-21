const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();
    let roleColor = message.member.highestRole.color;
    let hugger = message.author;

    let emote = client.emojis.get('534470532637130763')

    if(!Hugser) return message.channel.send('Trying to pat what '+emote)

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you pat yourself ')

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

    let embed = new Discord.RichEmbed()
    .setColor(roleColor)
    .setDescription(`**${hugger.username}** pat **${Hugser.username}**`)
    .setImage(body.url)
    message.channel.send(embed)
}
