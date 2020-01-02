var num: number = 10
var bool: boolean = true
var str: string = "Banana"
var list: number[] = [1, 2, 3]
var list2: Array<number> = [1, 2, 3]
enum Dia { Segunda, Terca, Quarta, Quinta, Sexta }
var tuple: [string, number];
tuple = ["Tallyto", 23];

//Any aceita qualquer tipo
let qualquer: any = "string"
//Casting de any para string
let qualquerLength: number = (<string>qualquer).length
let qualquerToUpperCase: string = (qualquer as string).toLocaleUpperCase()

console.log(`tamanho ${qualquerLength} maiusculo ${qualquerToUpperCase}`)

//Soma numeros
function add(v1: number, v2: number, v3?: number): number {
    if (v3 !== undefined) {
        return v1 + v2 + v3
    }
    return v1 + v2
}

//Aceita qualquer tipo de dado
function addQualquerTipo(v1: any, v2: any, v3?: any): any {
    if (v3 !== undefined) {
        return v1 + v2 + v3
    }
    return v1 + v2
}

function add2(v1: string, ...v2: number[]) {
    let sum: number = 0
    let i: number;
    for (i = 0; i < v2.length; i++ ) {
        sum = sum + v2[i]
    }
    console.log(`${v1} a soma é ${sum}`)

}

add2("O valor", 1,2,3,4)