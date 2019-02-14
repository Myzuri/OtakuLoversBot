const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();
    var me = args[0];
    let roleColor = message.member.highestRole.color;
    let hugger = message.author;

    let emote = client.emojis.find(e=>e.name === 'TohsakaFacepalm')
    if(me === 'me' && message.author.id === '498479906439823370') {
        const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
    .setDescription(`Yeah, I kiss Master !`)
    .setColor(roleColor)
    .setImage(body.url)
    message.channel.send(embed)
    } else if (me === 'me' && message.author.id !== '498479906439823370') {
        return message.channel.send('Hum, no sorry')
    }
    
    if(!Hugser && !me) return message.channel.send(`Trying to kiss what ${emote}`)

    if (Hugser.id === client.user.id && message.author.id === '498479906439823370') {
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);
    
        let embed = new Discord.RichEmbed()
        .setDescription(`Master give me a kiss !!!`)
        .setImage(body.url)
        message.channel.send(embed)
    } else if(Hugser.id === '469099157269774337') {
        return message.channel.send('Trying to do what')
    } 

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you kiss yourself ')
    if(Hugser === client.user.id) {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
    .setDescription(`**${hugger.username}** gives a kiss to **${Hugser.username}**, how cute they are !`)
    .setColor(roleColor)
    .setImage(body.url)
    message.channel.send(embed)
    }
}
