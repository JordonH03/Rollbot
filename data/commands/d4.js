const { SlashCommandBuilder } = require('@discordjs/builders');
const roll = require('../functions/roll.js');
const dropLowest = require('../functions/dropLowest.js');
const sum = require('../functions/sum.js');
const toString = require('../functions/toString.js');

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
            option.setName('reroll_ONE')
            .setDescription('Reroll_ONE all 1s?')
        )
        .addBooleanOption(option =>
            option.setName('DROP_ROLL')
            .setDescription('DROP_ROLL the lowest roll?')
        ),
	async execute(interaction) {
        await interaction.deferReply();

        // Gather the command options
        const QUANTTITY = interaction.options.getInteger('quantity');
        const MODIFIER = interaction.options.getInteger('modifier');
        const REROLL_ONE = interaction.options.getBoolean('reroll_ONE');
        const DROP_ROLL = interaction.options.getBoolean('DROP_ROLL');

        const numRolls = QUANTTITY ? QUANTTITY : 1;
        const add = MODIFIER ? MODIFIER : 0;
        const rolls = [];

        roll(numRolls, 4, rolls, REROLL_ONE);

        let message = `Rolling ${numRolls}d4`;
        if (add !== 0) message += ` + (${add})`;
        if (REROLL_ONE) message += ', rerolling 1s';

        if (DROP_ROLL) {
            dropLowest(rolls);
            message += ', dropping the lowest roll';
        }

        let rollString = toString(rolls);

        const total = sum(rolls, add);

        await interaction.editReply(`${message}: \n ${rollString} + (${add}) = ${total}`);
	},
};