
module.exports.run = async (Discord, client, message, args) => {

    function discoRole() {
        let roles = ['rainbow']
        let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        roles.forEach((role) => {
          let theRole = message.guild.roles.find("name", role);
          theRole.edit({color: random}).catch(e => {
            return message.channel.send("Fail to rainbow");
          });
        });
    }

    if(message.author.id === '498479906439823370') {
    setInterval(() => { discoRole(); }, 60000);
    message.channel.send("```I'm rainbowing the role```");
 }
};