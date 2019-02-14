const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let Hugser = message.mentions.users.first();
    let me = args[0];
    let hugger = message.author;
    let roleColor = message.member.highestRole.color;
    let emote = client.emojis.find(e=>e.name === 'TohsakaFacepalm')

    if(!Hugser) return message.channel.send(`Trying to kiss what ${emote}`)

    if(Hugser === message.author) return message.channel.send('Lemme laugh to see you kiss yourself ')
    
    if(Hugser.id === client.user.id)  return message.channel.send('I can\'t kiss you');
    
    if(me === 'me') {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);
        
    let embed = new Discord.RichEmbed()
    .setDescription(`A kiss just for you Master !`)
    .setImage(body.url)
    .setColor(roleColor)
    message.channel.send(embed)
   }
        

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let embed = new Discord.RichEmbed()
    .setDescription(`**${hugger.username}** gives a kiss to **${Hugser.username}**, how cute they are !`)
    .setImage(body.url)
    .setColor(roleColor)
    message.channel.send(embed)
}
