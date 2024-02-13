

function extractCurrencyValue(str) {
    return +str.slice(1); //Note: The unary plus before "str" converts the "str" to a numeric value
}

console.log( extractCurrencyValue('$120') === 120 ); // true