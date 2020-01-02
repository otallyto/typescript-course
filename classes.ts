class Person2 {
   protected _name: string;

    constructor(name: string) {
        this._name = name
    }

    print(): void {
        console.log(`name: ${this._name}`)
    }
}

class Employee2 extends Person2 {
   protected _salary: number
    constructor(name: string, salary: number, ) {
        super(name)
        this._salary = salary
    }

    print(): void {
        super.print()
        console.log(`salary: ${this._salary}`)
    }

}

let p3 = new Person2("Tallyto")
let p4: Person2 = new Employee2("Gustavo", 1200)
// p4._name = "jorge" Não da pra alterar depois de criar o objeto

p4.print()
p3.print()
