const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d4')
		.setDescription('Rolls some d4!')
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
            option.setName('reroll 1')
            .setDescription('Reroll all 1s?')
        )
        .addBooleanOption(option =>
            option.setName('drop lowest')
            .setDescription('Drop the lowest roll?')
        ),
	async execute(interaction) {
        const quant = interaction.options.getInteger('quantity');
        const mod = interaction.options.getInteger('modifier');
        const reroll = interaction.options.getBoolean('reroll 1');
        const drop = interaction.options.getBoolean('drop lowest');

        const numRolls = quant ? quant : 1;
        const rolls = [];
        const message = '';

        for (let i = 0; i < numRolls; i++) {
            const roll;
            if (reroll) {
                do {
                    roll = Math.ceil(4 * Math.random());
                } while (roll == 1);
            } else {
                roll = Math.ceil(4 * Math.random())
            }

            rolls.push(rolls);
        }
        const total;

        if (drop) {
            rolls.sort( (a, b) => a - b);
            rolls.shift();
        }

        total = rolls.reduce((a,b) => a+b, 0);
        if (mod) total += mod;

        for (let i = 0; i < rolls.length; i++) {
            message += rolls[i];
            if (i < rolls.length-1) message += ' + ';
        }

		await interaction.reply(`${message} + (${mod}) = ${total}`);
	},
};