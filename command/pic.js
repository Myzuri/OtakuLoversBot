const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {


        const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/avatar`);

    let embed = new Discord.RichEmbed()
    .setDescription(`Random pic here !`)
    .setImage(body.url)
    message.channel.send(embed)
    
}
