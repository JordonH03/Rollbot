module.exports = (rolls, mod = 0) => {
    // Add the integers in the array rolls plus some modifier
    return rolls.reduce( (a,b) => a+b, mod);
}