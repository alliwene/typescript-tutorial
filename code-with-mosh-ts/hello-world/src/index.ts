// let age: number = 20
// if (age < 50)
//     age += 10
// console.log(age)

// let sales: number = 123_456_789
// let course: string = "TypeScript"
// let isPublished: boolean = true

// function render(document: any) {
//     console.log(document)
// }

//? arrays
// let numbers: number[] = []
// numbers.forEach(n => n.toString)

//? tuples: fixed length array, each element has a type
// let person: [string, number] = ["John", 20]
// person.push(1)
// console.log(person)

//? enum: enumeration
// const enum Color { Red = 1, Green, Blue }
// let myColor: Color = Color.Green
// console.log(myColor)

//? functions
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022)
//     return income * 0.2;
//   return income * 0.4;
// }
// calculateTax(10_000, 2021);

//? Objects
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.name = "John";
// employee.id = 0

//? Union types
// function kgToLbs(weight: number | string): number {
//?  Narrowing
//   if (typeof weight === "number")
//     return weight * 2.2;
//   return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs(10));
// console.log(kgToLbs("10kg"));

//? Intersection
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// const ui: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

//? Literal (exact, specific) types
// type Qunatity = 50 | 100
// let quantity: Qunatity = 50

//? Optional chaining
// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
//? Optional property access operator
// console.log(customer?.birthday?.getFullYear());

// let customers: Customer[] = [];
//? Optional element access operator
// console.log(customers?.[0]?.birthday);

//? Optional call
// let log: any = null
// console.log(log?.('a'));

//? Nullish Coalescing operator
// let speed: number | null = null
// let ride = {
//     speed: speed ?? 30
// }
// console.log(ride.speed);

//? Type assertions
// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById("phone");
// phone.value;

//? Never type
// function processEvents(): never {
//     while (true) {
//         // do something
//     }
// }

// function reject(message: string): never {
//     throw new Error(message)
// }
// processEvents();
// reject('')
// console.log('Hello World!');

