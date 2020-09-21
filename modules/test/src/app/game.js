class Square {
    constructor(a, b) {
        this.a = a,
        this.b = b
    }

    calculate() {
        let p = (this.a + this.b) * 2;
        this.p = p;
        return console.log(p);
    }
}

export {Square}