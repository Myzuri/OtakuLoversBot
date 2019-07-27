const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (Discord, client, message, args) => {

    jruser = message.mentions.users.first() || message.author;

    const canvas = Canvas.createCanvas(1080,1080);
    const ctx = canvas.getContext('2d');

    const bg = await Canvas.loadImage('https://i.imgflip.com/yp6kp.jpg?a434256');
    ctx.drawImage(bg,0,0, canvas.width, canvas.height)

    const { body:buffer } = await snekfetch.get(jruser.avatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.beginPath();
    ctx.arc(483, 324, 260, 0, 6.28, false); //draw the circle
    ctx.clip(); //call the clip method so the next render is clipped in last path
    ctx.stroke();
    ctx.closePath();
    ctx.drawImage(avatar, 210, 60, 530,530);

    //create attachment without calling Discord.attachment (because fuck the "not constructor error")
       message.channel.send({ files: [canvas.toBuffer()], name: 'image.png'})
        };