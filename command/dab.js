const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (Discord, client, message, args) => {

    jruser = message.mentions.users.first() || message.author;

    const canvas = Canvas.createCanvas(833,578);
    const ctx = canvas.getContext('2d');

    const bg = await Canvas.loadImage('https://i.redd.it/zao56sh30yqz.jpg');
    ctx.drawImage(bg,0,0, canvas.width, canvas.height)

    const { body:buffer } = await snekfetch.get(jruser.avatarURL);//for this command I need to get 5 time in row the image
    const avatar = await Canvas.loadImage(buffer);
    ctx.beginPath();
    ctx.arc(600, 150, 130, 0, 6.28, false); //draw the circle
    ctx.clip(); //call the clip method so the next render is clipped in last path
    ctx.stroke();
    ctx.closePath();
    ctx.drawImage(avatar, 470, 20, 260,260);
    
    //create attachment without calling Discord.attachment (because fuck the "not constructor error")
       message.channel.send({ files: [canvas.toBuffer()], name: 'image.png'})
    };