module.exports = (rolls) => {
    // Returns the list of integers in an array rolls as a string
    let string = '';

    for (let i = 0; i < rolls.length; i++) {
        string += rolls[i];
        if (i < rolls.length-1) string += ' + ';
    }

    return string;
}