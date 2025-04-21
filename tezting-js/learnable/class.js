class Shape {
    constructor(type, width, height) {
        this.type = type;
        this.height = height;
        this.width = width;
    }

    area() {
        return this.width * this.height;
    }
}

const wi = new Shape("rectangle", 100, 200);

const hi = new Shape("square", 50, 100);

console.log(wi.area());
console.log(hi.area());

// wi.area();
// hi.area();