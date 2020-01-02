function printName(person: Person): void {
    console.log(person.name)
}

interface Person {
    name: string,
    age?: number
} 

interface Person {
    height?: number
}

interface Employee extends Person {
    salary: number
}

interface Menager extends Person {
    readonly bonus: number
}

let p1: Menager = { name: "Tállyto",age: 23 , height: 1.77, bonus: 5}
// p1.bonus = 3 Não pode alterar pois somente leitura

printName(p1)
// console.log(p1);

let p2: Employee = { name: "Tállyto", salary: 650 }
