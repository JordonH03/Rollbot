const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('../config.json');

const commands = [];

const commandFiles = fs.readdirSync('../data/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../data/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		).then( 
			() => { console.log('Successfully reloaded application (/) commands.') }, 
		);

	} catch (error) {
		console.error(error);
	}
})();
