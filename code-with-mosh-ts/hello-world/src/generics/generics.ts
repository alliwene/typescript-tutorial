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
interface Product {
  name: string;
  price: number;
}

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// //! Pass on the generic type parameter
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// let store = new CompressibleStore<Product>();

// //! Restrict the generic type parameter
// class SerachableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// //! Fix the geeric type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return this._objects.filter((obj) => obj.name === category);
//   }
// }

// //* keyof Operator
// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 10 });
// console.log(store.find('name', 'a'))

//* Type Mapping (Utility Types)
// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// type Optional<T> = {
//   [K in keyof T]?: T[K];
// };

// type Nullable<T> = {
//   [K in keyof T]: T[K] | null;
// };

// let product: ReadOnly<Product> = {
//   name: "b",
//   price: 20,
// };
// product.name = "c";

// let optionalProduct: Optional<Product> = {}
// let optionalProduct: Partial<Product> = {}


