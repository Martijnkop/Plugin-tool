const { client, TOKEN, fs, Enmap } = require('./config')

client.commands = new Enmap();
client.timedEvents = new Enmap();

fs.readdir('./events/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;

        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];

        console.log(`Loaded event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;

    files.forEach(file => {
        if (!file.endsWith('.js')) return;

        let props = require(`./commands/${file}`);
        let cmdName = file.split(".")[0];

        client.commands.set(cmdName, props);
        console.log(`Loaded command ${cmdName}`);
    });
});

fs.readdir('./timedEvents/', async (err, files) => {
    if (err) return console.error;
    files.forEach(async file => {
        if (!file.endsWith('.js')) return;

        let props = require(`./timedEvents/${file}`);
        let temp = file.split(".")[0]
        let cmdName = temp.split("_")[0]
        let interval = temp.split("_")[1]

        setInterval(function () {
            props.run(client);
        }, interval);
        console.log("Loaded timed event " + cmdName + " with interval " + interval + " ms");
    });
});

client.login(TOKEN)