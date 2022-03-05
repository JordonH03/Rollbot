module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {

		if (interaction.isCommand()) {
			console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered the ${interaction.commandName} interaction.`);
		}
		
	},
};