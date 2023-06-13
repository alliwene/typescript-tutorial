//* Class Decorators
// function Component(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

//* Paramtized Decorators
// type ComponentOptions = {
//   selector: string;
// };

// //! Decorator factory
// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// //* Decorator Composition
// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

//* Method Decorators
// function Log(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// console.log(person.say("Hello"));

//* Accessor Decorators
// function Capitalize(
//   _target: any,
//   _methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toUpperCase() : result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   @Capitalize
//   get fullName() {
//     return 0;
//   }
// }

// let person = new Person("John", "Doe");
// console.log(person.fullName);

//* Property Decorators
// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should beat least ${length} characters long`
//           );
//         value = newValue;
//       },
//     };

//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;
//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User("123");
// console.log(user.password);

//* Parameter Decorators
type WatchedParamter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParamters: WatchedParamter[] = [];

function Watch(_target: any, methodName: string, parameterIndex: number) {
  watchedParamters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch _speed: number) {}
}

console.log(watchedParamters);

