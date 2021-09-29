const { LOGCHANNELID } = require('../config')

const { dbCommand } = require('../utilities/DBCommand');

exports.run = (client, message, args) => {
    if (message.author.bot) return;
    if (message.author.id !== "145451859610566657") return;

    var logChannel = message.guild.channels.cache.get(LOGCHANNELID)
    logChannel.send('Setting up database!')

    var result = dbCommand(`CREATE TABLE IF NOT EXISTS USERS
	                            (ID INTEGER NOT NULL PRIMARY KEY,
	                            USERID INTEGER NOT NULL,
	                            ISGROUP BOOLEAN NOT NULL);`)

    var result2 = dbCommand(`SELECT * FROM users;`)

    console.log(result2)
};

exports.help = {
    name: '[commandname]'
}