const { PREFIX } = require('../config')

module.exports = (client, message) => {
    if (message.author.bot) return;                     //bots don't execute commands, to prevent loops
    if (message.content.indexOf(PREFIX) !== 0) return;            // if msg is without prefix

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g); //split the message in an array of args
    const command = args.shift().toLowerCase();                            //and make the command a seperate variable

    const cmd = client.commands.get(command); //get the command from the list

    if (!cmd) return; //do nothing if command doens't exist

    cmd.run(client, message, args);
}