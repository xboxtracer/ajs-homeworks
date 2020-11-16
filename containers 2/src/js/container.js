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