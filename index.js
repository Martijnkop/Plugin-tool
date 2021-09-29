const { client, TOKEN, GUILDID, LOGCHANNELID } = require('./config')
const { getConnection } = require('./utilities/DBConnection')

client.on('ready', (c) => {
    var guild = c.guilds.cache.get(GUILDID)
    var logChannel = guild.channels.cache.get(LOGCHANNELID)
    var now = new Date()
    logChannel.send("Bot started at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
})

client.login(TOKEN)

client.on('messageCreate', async function (message) {
    if (message.author.bot) return;
    if (message.channelId == LOGCHANNELID || message.author.id == '145451859610566657') if (message.content == "stop") {
        var now = new Date()
        await message.channel.send("Bot stopping at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
        await process.exit()
    }
    if (message.author.id == '145451859610566657') {
        let conn;
        try {
            conn = await getConnection();
            var query = message.content;
            var rows = await conn.query(query)
            console.log(rows)
        } catch (err) {
            console.error(err)
        } finally {
            if (conn) conn.release()
        }

    }
})