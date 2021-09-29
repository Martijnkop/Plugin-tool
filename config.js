require('dotenv-flow').config()

const { Client, Intents } = require('discord.js')

const fs = require('fs');
const Enmap = require('enmap');

const mariadb = require('mariadb')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING]
}) // ALL INTENTS

module.exports = {
    TOKEN: process.env.TOKEN,
    GUILDID: process.env.GUILDID,
    LOGCHANNELID: process.env.LOGCHANNELID,

    HOST: process.env.HOST,
    PORT: process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    TABLEPREFIX: process.env.TABLEPREFIX,

    PREFIX: process.env.PREFIX,

    client,
    fs,
    Enmap,
    mariadb
}