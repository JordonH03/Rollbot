# Rollbot

A discord bot that rolls dice.

## Commands

---

**d4, d6, d8, d10, d12, d20, d100:** Sums random integers from 1 to the number indicated in the command name.

### Options

**quantity:** How many dice of the command you want to roll. Must be a positive number. If no quantity is given, the command rolls 1 die.

**modifier:** An integer you want to add to the roll. Can take negative numbers. If none is given, the command adds 0.

**reroll-ones:** If there are any rolls of 1, the bot keeps rerolling until the result is not 1.

**drop-lowest:** The bot will exclude the lowest roll when adding the rolls together. If the quantity is 1, the bot does not drop the roll, even if the option is set to True.
