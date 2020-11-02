export class Magician {
    constructor() {
        this.attack = 100;
		this.stoned = false;
		this.distance = 1;
    }
    get attack() {
		if (this.distance == 0 || this.distance > 5) {
			return new Error('wrong distance');
		}
		const linearDmgDecrease = (this._attack * (10 - (this.distance - 1))) / 10;
		if (this.stoned) {
			const stonedDmgDecrease = Math.log2(this.distance) * 5;
			return Math.floor(linearDmgDecrease - stonedDmgDecrease);
		} else {
			return linearDmgDecrease;
		}
    }
    set attack(value) {
        this._attack = value;
    }
    stone(bool) {
		if (typeof bool === 'boolean') {
			this.stoned = bool;
		}
    }
}

export class ArrayBufferConverter  {
	load(arrayBuffer) {
		this.element = new Uint16Array(arrayBuffer);
	}
	toString() {
		let num2 = "";
		this.element.map(el => num2 += String.fromCharCode(el));
		return num2;
	}
}