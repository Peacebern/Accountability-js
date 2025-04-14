let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => a > b ? 1 : -1)); //This sorts based on codes of each letters
console.log(countries.sort((a, b) => a.localeCompare(b))); //while this sorts out locally through normal alphabets without their codes

