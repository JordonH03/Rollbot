const { client } = require('../index.js');


module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {

		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);

			command.execute(interaction);
			console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered the ${interaction.commandName} interaction.`);
		}
		
	},
};