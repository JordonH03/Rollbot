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
        // const quant = interaction.options.getInteger('quantity');
        // const mod = interaction.options.getInteger('modifier');
        // const reroll = interaction.options.getBoolean('reroll_1');
        // const drop = interaction.options.getBoolean('drop_lowest');

        // const numRolls = quant ? quant : 1;
        // const rolls = [];
        // const message = '';

        // console.log(reroll);

        // for (let i = 0; i < numRolls; i++) {
        //     const roll = 0;
        //     if (reroll) {
        //         do {
        //             roll = Math.ceil(4 * Math.random());
        //         } while (roll == 1);
        //     } else {
        //         roll = Math.ceil(4 * Math.random())
        //     }

        //     rolls.push(rolls);
        // }

        // if (drop) {
            
        // }

        // const total = rolls.reduce((a,b) => a+b, 0);
        // if (mod) total += mod;

        // for (let i = 0; i < rolls.length; i++) {
        //     message += rolls[i];
        //     if (i < rolls.length-1) message += ' + ';
        // }

        // await interaction.deferReply();
		// await wait(10000);
		// await interaction.editReply(`pong`);
        // ${message} + (${mod}) = ${total}
        await interaction.reply(`pong!`);
	},
};