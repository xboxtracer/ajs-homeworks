export class Validator {
    constructor(str) {
        this.str = str
    }
    validateUsername() {
        const allStrRegExp = !/[^a-zA-Z0-9-_]/.test(this.str)
        const firstSymbolRegExp = !/^[0-9-_]/.test(this.str)
        const lastSymbolRegExp = !/[0-9-_]$/.test(this.str)
        const tripleNumberRegExp = !/[0-9]+[0-9]+[0-9]+[0-9]+/.test(this.str)

        return (allStrRegExp&&firstSymbolRegExp&&lastSymbolRegExp&&tripleNumberRegExp)
    }
}


export function changePhoneNumber(phoneNumber) {
    let a = '+'
    let phoneNumberRegExp = /[0-9]/
    phoneNumber.split('').forEach(elem => {
        if(phoneNumberRegExp.test(elem)) {
        a += elem
        }
    })
    return a
}