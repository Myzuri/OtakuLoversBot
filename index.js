const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');

let prefix = ';';
let queue = {};


console.log('connexion.........')

const commands = {

    'play': (msg) => {
        if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${prefix}add`);
        if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
        if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');
        let dispatcher;
        queue[msg.guild.id].playing = true;

        console.log(queue);
        (function play(song) {
            console.log(song);
            if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {
                queue[msg.guild.id].playing = false;
                msg.member.voiceChannel.leave();
            });
            msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
            dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }));
            let collector = msg.channel.createCollector(m => m);
            collector.on('message', m => {
                if (m.content.startsWith(prefix + 'pause')) {
                    msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
                } else if (m.content.startsWith(prefix + 'resume')){
                    msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
                } else if (m.content.startsWith(prefix + 'skip')){
                    msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
                } else if (m.content.startsWith('volume+')){
                    if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
                    msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                } else if (m.content.startsWith('volume-')){
                    if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
                    msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                } else if (m.content.startsWith(prefix + 'time')){
                    msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
                }
            });
            dispatcher.on('end', () => {
                collector.stop();
                play(queue[msg.guild.id].songs.shift());
            });
            dispatcher.on('error', (err) => {
                return msg.channel.sendMessage('error: ' + err).then(() => {
                    collector.stop();
                    play(queue[msg.guild.id].songs.shift());
                });
            });
        })(queue[msg.guild.id].songs.shift());
    },
    'join': (msg) => {
        return new Promise((resolve, reject) => {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });
    },
    'add': (msg) => {
        let url = msg.content.split(' ')[1];
        if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${prefix}add`);
        yt.getInfo(url, (err, info) => {
            if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
            if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
            queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
            msg.channel.sendMessage(`added **${info.title}** to the queue`);
        });
    },
    'queue': (msg) => {
        if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${prefix}add`);
        let tosend = [];
        queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
        msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
    },
    
};

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
    
    if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
    
    if(msg.content === '<@'+client.user.id+'>' && msg.author.id === '498479906439823370') {
        return msg.channel.send('Master **'+msg.author.username+'**, my prefix here is `'+prefix+'`');
    } else if(msg.content === '<@'+client.user.id+'>') {
        return msg.channel.send( `My prefix is: \`${prefix}\`` );
    }
})



client.on("message", async message => {
    if (message.author.id === client.user.id) return
    if (message.author.id === '498479906439823370') return
if (message.channel.type !== "text") return
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

client.on("message", async message => {
    if (message.author.id === client.user.id) return
    if (message.author.id === '498479906439823370') return
if (message.channel.type !== "text") return
if (message.channel.id !== '507688738730803221') return
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



    if(message.author.bot) return
    if(message.content.indexOf(prefix) !== 0) return

    try {

        

        let commandFile = require(`./command/${command}.js`);
        commandFile.run(Discord, client, message, args)
    } catch (err) {
        return 
    }

})
