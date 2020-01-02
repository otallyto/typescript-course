function print1(name: string): void {
    console.log(name)
}

const printOrNot = (flag: boolean = false): void => {
    let str: string = flag ? "Flag is true" : "Flag is false"
    console.log(str)
}

let obgExemple = {
    name: "Jyaria",
    lastName: "Ninja",
    fullName: function() {
        return this
    },
}
printOrNot()
//Retorna o objeto
console.log(obgExemple.fullName())