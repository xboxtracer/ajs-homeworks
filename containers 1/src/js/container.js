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