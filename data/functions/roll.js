module.exports = (numRolls, sides, rolls, rerollOnes) => {
    // Get numRolls random integers from 1 to sides inclusive
    // If rerollOnes is true, keep randomizing if the integer is 1
    for (let i = 0; i < numRolls; i++) {
        let roll;

        if (rerollOnes) {
            do {
                roll = Math.ceil(sides * Math.random());
            } while (roll === 1);
        } else {
            roll = Math.ceil(sides * Math.random())
        }

        rolls.push(roll);   // Push the integer to the array of rolls       
    };
}