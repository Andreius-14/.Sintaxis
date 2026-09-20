// ┌───────────────────────────────────┐
// │             DELETE                │
// └───────────────────────────────────┘

// => ARRAY

const miArray = ["manzana", "banana", "cereza"];

delete miArray[1];

console.log(miArray); // Output: ["manzana", undefined, "cereza"]

// => OBJETO
const miObjeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

delete miObjeto.edad;

console.log(miObjeto); // Output: { nombre: "Juan", ciudad: "Madrid" }
