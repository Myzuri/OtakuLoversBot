const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();

    let hugger = message.author;

    let emote = client.emojis.get('534470532637130763')

    if(!Hugser) return message.channel.send('Trying to hug what '+emote)

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you hug yourself ')

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let embed = new Discord.RichEmbed()
    .setDescription(`**${hugger.username}** gives a hug to **${Hugser.username}**`)
    .setImage(body.url)
    message.channel.send(embed)
}
