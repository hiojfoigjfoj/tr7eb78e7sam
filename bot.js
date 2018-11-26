const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516607226266386432");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__Welcommme ,:dove:  to Tune Server __ **
**
`), 4000)        
}
});
 
client.login(process.env.BOT_TOKEN)
