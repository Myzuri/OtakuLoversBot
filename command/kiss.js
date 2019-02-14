const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();
    let me = args[0];
    let hugger = message.author;
    let roleColor = message.member.highestRole.color;
    let emote = client.emojis.find(e=>e.name === 'TohsakaFacepalm')

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you kiss yourself ')
    
    if(Hugser.id === client.user.id)  return message.channel.send('I can\'t kiss you');
         
    if(!Hugser && !me) return message.channel.send(`Trying to kiss what ${emote}`);
    
    if(me === 'me' && message.author.id === '498479906439823370') {
        const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
    .setDescription(`Yeah, I kiss Master !`)
    .setImage(body.url)
    message.channel.send(embed)
    } else if (me === 'me' && message.author.id !== '498479906439823370') {
        return message.channel.send('Hum, no sorry')
    }

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);
    if(Hugser !== client.user.id) {
        let embed = new Discord.RichEmbed()
        .setDescription(`**${hugger.username}** gives a kiss to **${Hugser.username}**, how cute they are !`)
        .setImage(body.url)
        .setColor(roleColor)
        message.channel.send(embed)
    }
}
