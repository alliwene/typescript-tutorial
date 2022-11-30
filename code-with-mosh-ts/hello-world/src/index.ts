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

// // arrays
// let numbers: number[] = []

// numbers.forEach(n => n.toString)

// tuples: fixed length array, each element has a type
// let person: [string, number] = ["John", 20]
// person.push(1)
// console.log(person)

// enum: enumeration
// const enum Color { Red = 1, Green, Blue }
// let myColor: Color = Color.Green
// console.log(myColor)

// functions
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022)
//     return income * 0.2;
//   return income * 0.4;
// }
// calculateTax(10_000, 2021);

// Objects
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

// Union types
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number")
//     return weight * 2.2;
//   return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs(10));
// console.log(kgToLbs("10kg"));

// Intersection
type Draggable = {
  drag: () => void;
};
