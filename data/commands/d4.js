const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d4')
		.setDescription('Roll some d4!')
        .setDefaultPermission(true)
        .addIntegerOption(option => 
            option.setName('quantity')
            .setDescription('Number of d4 to roll.')
            .setMinValue(1)
        )
        .addIntegerOption(option => 
            option.setName('modifier')
            .setDescription('Number to add after rolls.')
        )
        .addBooleanOption(option =>
            option.setName('reroll')
            .setDescription('Reroll all 1s?')
        )
        .addBooleanOption(option =>
            option.setName('drop')
            .setDescription('Drop the lowest roll?')
        ),
	async execute(interaction) {

        await interaction.deferReply();
        await wait(10000);
        await interaction.editReply({
            content: 'roll',
        });
	},
};