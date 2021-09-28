const { client, TOKEN, GUILDID, LOGCHANNELID } = require('./config')


client.on('ready', (c) => {
    var guild = c.guilds.cache.get(GUILDID)
    var logChannel = guild.channels.cache.get(LOGCHANNELID)
    var now = new Date()
    logChannel.send("Bot started at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
})

client.login(TOKEN)

client.on('messageCreate', async function (message) {
    if (message.author.bot) return;
    if (message.channelId == LOGCHANNELID) if (message.content == "stop") {
        var now = new Date()
        await message.channel.send("Bot stopping at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
        await process.exit()
    }
})