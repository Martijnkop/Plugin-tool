const { GUILDID, LOGCHANNELID } = require('../config')

module.exports = (client) => {
    var guild = client.guilds.cache.get(GUILDID)
    var logChannel = guild.channels.cache.get(LOGCHANNELID)
    var now = new Date()
    logChannel.send("Bot started at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
}