// ┌────────────────────────
// │  => EXAMPLE - 01
// └────────────────────────
const map1 = new Map([
  ["uno", 1],
  ["dos", 2],
  ["tres", 3],
]);

console.log(map1); // Map { uno: 1, dos: 2, tres: 3 }

// ┌────────────────────────
// │  => EXAMPLE - 02
// └────────────────────────
const map2 = new Map();

// Añadir elementos
map2.set("uno", 1);
map2.set("dos", 2);
map2.set("tres", 3);

// Iterar sobre el mapa
map.forEach((key, value) => {
  console.log(`${key}: ${value}`);
});

// ┌───────────────────────────────────┐
// │      3. Iteración              │
// └───────────────────────────────────┘
const nuevoMapa = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [clave, valor] of nuevoMapa) {
  console.log(`${clave}: ${valor}`); // "a: 1", "b: 2"
}
nuevoMapa.forEach((valor, clave) => {
  console.log(`${clave} -> ${valor}`); // "a -> 1", "b -> 2"
});
console.log([...nuevoMapa]); // [["a", 1], ["b", 2]]
