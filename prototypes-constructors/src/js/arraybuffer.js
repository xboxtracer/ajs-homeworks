export class Magician {
    constructor() {
        this.attack = 100;
		this.stoned = false
    }
    get attack() {
        return this._attack;
    }
    set attack(value) {
        this._attack = value
    }
	fight(val) {
		let a = (Math.log2(val) * 5)
		val--
		let b = (this.attack / 10) * val
		if (this.stoned) {
			this.attack -= (b + a)
		} else {
			this.attack -= b
		}
	}
    stone(bool) {
		if (typeof bool === 'boolean') {
			this.stoned = bool
		}
    }
}


export class ArrayBufferConverter  {
	load(arrayBuffer) {
		this.element = new Uint16Array(arrayBuffer)
	}
	toString() {
		let num2 = ""
		this.element.map(el => num2 += String.fromCharCode(el))
		return num2
	}
}