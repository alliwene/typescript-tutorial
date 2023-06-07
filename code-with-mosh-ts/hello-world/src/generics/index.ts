//* Generic Classes
// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair<number, string>(1, 'Mosh')
// let pair = new KeyValuePair(1, 'Mosh')

//* Generic Functions
// class ArrayUtils {
//   static wrapInArray<T>(value: T): T[] {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray("1");

// //* Generic Interfaces
// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<User>('url')
// result.data?.username

// //* Generic Constraints
// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo({ name: "Debo" });
// echo(new Customer('Bill'))

//* Extending Generic classes
