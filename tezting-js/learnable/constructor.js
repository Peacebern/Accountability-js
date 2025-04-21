class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    sayHi() {
        console.log(`this car was created in year ${this.year} and has ${this.miles} miles on it`);
    }
}

let bernard = new Car("Benz", 2005, 1400);

console.log(bernard.sayHi());