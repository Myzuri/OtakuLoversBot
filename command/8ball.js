const math = require('mathjs')
let config = require('../modules/config.json')
module.exports.run = async (Discord, client, message, args) => {


	let ballq = args.join(' ');
	if(!ballq) return message.channel.sendCode('js', `${config.prefix}8ball [your question]`)
		return message.channel.send(ballRes())




	function ballRes(){
		let ballFill = ['Maybe...', 'Yes !', 'Sure', 'Why not', 'I don\'t know', 'OwO, what the heck']
		let ballSai = ballFill[Math.floor(Math.random()*ballFill.length)]; 
		return ballSai;
	}
		
}
	
