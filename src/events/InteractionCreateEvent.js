module.exports = {
	name: 'interactionCreate',
	execute(interaction) {

		if (interaction.isCommand()) {
			console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		}
		
	},
};