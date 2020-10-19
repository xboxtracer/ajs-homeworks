export class Team {
    constructor() {
       this.member = new Set()
    }
    add(val) {
        this.member.add(val)
    }
    addAll(...arr) {
      arr.forEach(val => this.member.add(val))
    }
    toArray() {
      let arr = []
      this.member.forEach(val => arr.push(val))
      return arr
    }
}


export class ErrorRepository {
  constructor() {
    this.err = new Map()
  }
  setErr(err) {
    this.err.set(err.code, err.value);
  }
  translate(code) {
    let a
    if (this.err.has(code)) {
      a = this.err.get(code);
    } else {
      a = 'Unknown error' 
    }
    return a
  }
}