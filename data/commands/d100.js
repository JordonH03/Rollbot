const { SlashCommandBuilder } = require('@discordjs/builders');
const roll = require('../functions/roll.js');
const dropLowest = require('../functions/dropLowest.js');
const sum = require('../functions/sum.js');
const toString = require('../functions/toString.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d100')
		.setDescription('Roll some d100!')
        .setDefaultPermission(true)
        .addIntegerOption(option => 
            option.setName('quantity')
            .setDescription('Number of d100 to roll.')
            .setMinValue(1)
        )
        .addIntegerOption(option => 
            option.setName('modifier')
            .setDescription('Number to add after rolls.')
        )
        .addBooleanOption(option =>
            option.setName('reroll-ones')
            .setDescription('Reroll all 1s?')
        )
        .addBooleanOption(option =>
            option.setName('drop-lowest')
            .setDescription('Drop the lowest roll?')
        ),
	async execute(interaction) {
        await interaction.deferReply();

        // The command options
        const QUANTTITY = interaction.options.getInteger('quantity');
        const MODIFIER = interaction.options.getInteger('modifier');
        const REROLL_ONE = interaction.options.getBoolean('reroll-ones');
        const DROP_ROLL = interaction.options.getBoolean('drop-lowest');

        // Set defaults to the command options if none are given
        const numRolls = QUANTTITY ? QUANTTITY : 1;
        const add = MODIFIER ? MODIFIER : 0;
        
        // Rolls the dice
        const rolls = [];
        roll(numRolls, 100, rolls, REROLL_ONE);

        // Create a string message describing the roll and options
        let message = `Rolling ${numRolls}d100`;
        if (add !== 0) message += ` + (${add})`;
        if (REROLL_ONE) message += ', rerolling 1s';
        if (DROP_ROLL) {
            if (numRolls > 1) {
                dropLowest(rolls);
                message += ', dropping the lowest roll';
            }
        }

        let rollString = toString(rolls);   // Convert the rollsin to a string for the bot message

        const total = sum(rolls, add);

        await interaction.editReply({
            content: `${message}: \n ${rollString} + (${add}) = **${total}**`,
        });
	},
};