const { LOGCHANNELID } = require('../config')

exports.run = async function (client, message, args) {
    if (message.channelId == LOGCHANNELID || message.author.id == '145451859610566657') {
        var now = new Date()
        await message.channel.send("Bot stopping at " + now.getHours() + ":" + now.getMinutes() + "." + now.getSeconds())
        await message.delete()
        await process.exit()
    }
};

exports.help = {
    name: '[commandname]'
}