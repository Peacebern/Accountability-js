function Calculator () {
    this.methods = {
        "-" : (a, b) => a - b,
        "+" : (a, b) => a + b,
    };

    this.calculate = function(str) {
        let split = str.split(' '),

        a = +split[0],
        op = split[1],
        b = +split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        } //Note: [op] in this.methods[op] is just a way of using bracket notation to access the operator object in the method dynamically, it is same as this.methods["+"] or this.methods.op.

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func; 
    }; //Note: [name] in this.methods[name] = func is just accessing the name of the object in the method dynamically to know which function to perform so in this case [name] is sort of same as [op] in this.methods[op] and then the function is (a, b);
}


let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

let div = powerCalc.calculate("4 / 2");
console.log(div);

let simple = new Calculator;
simple.addMethod("+", (a, b) => a + b);

let simp = simple.calculate("3 + 3");
console.log(simp);

//Note: so in essence i can recreate as many calculator as i want and add as many methods as i want and it does the exact same thing everytime.
