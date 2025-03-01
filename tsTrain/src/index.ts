// interface IUser<D> {
//     name: string
//     age: number
//     house: number
//     // data:D
// }
// const user1:Partial<IUser> = {
//     // name: 'max',
//     // age: 12,
//     house: 9,
//     // data: [1, 2, 3]
// }
//
// console.log(user1)


// class Human {
//
//
//     constructor(private name: string, private age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     getName(): string {
//         console.log(this.name)
//         return this.name
//     }
// }
//
//
//
// class User implements Human {
//
//
//     constructor(private name: string, private age: number, private house: number, private color: string) {
//         // super(name, age);
//         this.house = house;
//         this.color = color;
//     }
//
//     getHouse():number {
//         console.log(this.house)
//         return this.house
//     }
//
//     getName(): string {
//         return "";
//     }
// }
//
// const user1 = new User('Max', 12, 9, 'red')
//
// console.log(user1);
// user1.getName()
// user1.getHouse()


interface IElectric {
    enginePower: number


    getLedStatus(): boolean
}

class Car implements IElectric {


    constructor(private brand: string, private seats: number, private year: number, public enginePower: number) {
        this.brand = brand;
        this.seats = seats;
        this.year = year;
        this.enginePower = enginePower
    }

    start(): void {
        console.log('rrrrrr')
    }

    getInfo(): void {
        console.log(`Brand: ${this.brand}, Seats: ${this.seats}, Year: ${this.year}`)
    }

    getLedStatus(): boolean {
        return true
    }
}

const car1 = new Car('Mercedess', 5, 2025, 3.1)
console.log(car1)
car1.getInfo()
car1.getLedStatus()

abstract class Shape {
    abstract perimeter(): number

    abstract area(): number
}

class Triangle extends Shape {


    constructor(private a: number, private b: number, private c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    area(): number {
        return this.c / (this.a + this.b);
    }

    perimeter(): number {
        return this.a * this.b * this.c;
    }

}

class Square extends Shape{


    constructor(private a: number,private b: number) {
        super();
        this.a = a;
        this.b = b;
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a + this.b) / 2;
    }

}

const shapes:Shape[] = [
    new Triangle(1, 2, 5),
    new Square(2, 3)
]

console.log(shapes)

for (const shape of shapes) {
    console.log(shape.constructor['name'])
    console.log(shape.area());
    console.log(shape.perimeter());
}
