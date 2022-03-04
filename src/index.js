const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Create a new collection of command names
client.commands = new Collection();

// Get an array of command files
const commandFiles = fs.readdirSync('../data/commands').filter(file => file.endsWith('.js'));


// Set a new item in the Collection
// With the key as the command name and the value as the exported module
for (const file of commandFiles) {
	const command = require(`../data/commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Create an array containing the names of the event files 
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		// client.on(event.name, (...args) => console.log(...args));
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login to Discord with your client's token
client.login(token);