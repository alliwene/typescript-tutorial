//* Basic OOP
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }

//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) throw new Error("Invalid value");
//     this._balance = value;
//   }
// }

// let account = new Account(1, "Mike Blake", 20);
// console.log(typeof account);
// console.log(account instanceof Account);

// account.deposit(100);
// console.log(account.balance);

//* Index Signatures
// class SeatAssignment {
//   //* Index signature property
//   [seatNumber: string]: string;
// }
// let seats = new SeatAssignment();
// seats.A1 = "Peace";
// seats.A2 = "Love";
// console.log(seats.A2);

//* Static members
// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }

//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// //* Inheritance
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// //* Method Overriding
// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//   }
// }

// let teacher = new Teacher("Alina", "Lee");

// //* Polymorphism
// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// printNames([new Student(1, "Jet", "Li"), new Teacher("Bruce", "Lee")]);

//* Abstract Classes and Methods
//! Like uncooked meal - not ready
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}
