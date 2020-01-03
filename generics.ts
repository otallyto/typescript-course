function reverseList<T>(list: Array<T>): Array<T> {
    let reversedList: T[] = []
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i])
    }

    return reversedList;
}

let names = ["Luffy", "Zoro", "Sanji"]
let numbers = [1, 2, 3, 4, 5]
let reversedNames = reverseList<string>(names)
let reversedNumbers = reverseList<number>(numbers)

console.log(`reversed names ${reversedNames}
reversed numbers ${reversedNumbers}`)

class Person3 {
    protected _name: string;

    constructor(name: string) {
        this._name = name
    }

    print(): void {
        console.log(`name: ${this._name}`)
    }
}

interface Respository<T, ID> {
    findById(id: ID): T
    save(entity: T): T
}

class Person3Repository implements Respository<Person3, number>{
    findById(id: number): Person3 {
        console.log(`buscando por id: ${id}`);
        return new Person3("Nami");
    }

    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

interface numberId{
    id: number
}

interface Respository2<T, ID extends numberId> {
    findById(id: ID): T
    save(entity: T): T
}

class Person3Repository2 implements Respository2<Person3,numberId>{
    findById(numberId: numberId): Person3 {
        console.log(`buscando por id: ${numberId}`);
        return new Person3("Nami");
    }

    save(entity: Person3): Person3 {
        return new Person3("Franky");
    }
}

let personRepository = new Person3Repository()
console.log(personRepository.findById(3))
console.log(personRepository.save(new Person3("Tállyto")))


let personRepository2 = new Person3Repository2()
console.log(personRepository.findById(1))
console.log(personRepository.save(new Person3("Tállyto")))