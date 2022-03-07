module.exports = (rolls) => {
    // Determine the lowest value in an int array of rolls
    // then remove it from the array
    
    const min = Math.min.apply(null, rolls);
    const isMin = (elem) => elem === min;
    const index = rolls.findIndex(isMin);

    rolls.splice(index, 1);
}
