const Discord = require('discord.js');
const client = new Discord.Client();


let prefix = ';';


console.table('connexion.........')



client.on('ready', () => {
    setInterval(function() {
    let allgame = ['My Master still lazy to dev UwU', `${prefix}help`, 'OwO', `${client.users.size} users <3`]
    let gameon = allgame[Math.floor(Math.random()*allgame.length)]
    client.user.setGame(gameon, 'https://www.twitch.tv/monstercat');
}, 40000)
    console.log('connexion successfull')
    console.log(`Logged as ${client.user.tag}` )
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  });
  
  client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  });


client.login(process.env.TOKEN);

client.on('message', msg => {
    if(msg.content === '<@'+client.user.id+'>') return msg.channel.send( `My prefix is: \`${prefix}\`` )
})



client.on("message", async message => {
    if (message.author.id === client.user.id) return
    if (message.author.id === '498479906439823370') return
if (message.channel.type !== "dm") return
let cachedDMS = [];
let owner = '498479906439823370'
let sinceLastLJ = 0;
let over = Date.now() - sinceLastLJ < 60000 ? "Less than a minute after I joined." : "Out of the blue.";
if(!owner){
let msg = {
    content: message.content,
    author: {
        id: message.author.id,
        tag: message.author.tag
    },
    over
}
return cachedDMS.push(msg)
}
let txt = new Discord.RichEmbed()
.setColor('#e6f2ff')
.setAuthor(`${message.author.tag} ${message.author.id}`)
.addField('Message content', message.content)
try {
await client.channels.get('534064680377909258').send(txt)
} catch (err) {
    console.log("I can't send the content")
}


})



client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const username = message.author.username;
const math = require('mathjs');



    if(message.author.bot) return
    if(message.content.indexOf(prefix) !== 0) return

    try {

        

        let commandFile = require(`./command/${command}.js`);
        commandFile.run(Discord, client, message, args)
    } catch (err) {
        return 
    }

})
