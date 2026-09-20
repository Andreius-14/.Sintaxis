// ┌───────────────────────────────────┐
// │               SPREAD              │
// └───────────────────────────────────┘

// => Permite Insertar una coleccion el IMPUT De un Callback

// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

const copia = [...arr1];
const arr10 = [...arr2, ...arr1]; // [3, 4, 5, 0, 1, 2]
const arr20 = [...arr1, 3, 4, 5]; // [0, 1, 2, 3, 4, 5]

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"]; // ["head", "shoulders", "knees", "and", "toes"]

// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const obj3 = { a: 1, b: 2 };

const clone = { ...obj1 }; // { foo: "bar", x: 42 }
const merge = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 13 }
const obj20 = { ...obj3, c: 3, d: 4 }; // { a: 1, b: 2, c: 3, d: 4 }

// │                  FUNCTION                     │
// │                  FUNCTION                     │
// │                  FUNCTION                     │
// │                  FUNCTION                     │
// │                  FUNCTION                     │
// │                  FUNCTION                     │

// EXAMPLE I
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a); // a, one
  console.log("b", b); // b, two
  console.log("manyMoreArgs", manyMoreArgs); // manyMoreArgs, ["three", "four", "five", "six"]
}

myFun("one", "two", "three", "four", "five", "six");

// EXAMPLE II
const mostrarDatos = (...datos) => {
  console.log(datos);
};

mostrarDatos("Carlos", 23, "correo@correo.com", "Mexico");

// EXAMPLE III
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // Output: 6

// EXAMPLE IV
const myFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};

let args = [1, 2, 3];

myFunction(...args, 4);
