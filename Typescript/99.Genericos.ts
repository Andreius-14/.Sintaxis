function identify<T>(arg: T): T {
  return arg;
}

let output1 = identify<string>("Hola");
let output2 = identify<number>(19);



console.log("Output 1: " + output1);
console.log("Output 2: " + output2);

class Caja<T> {
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;

  }

  /**
   * obtenerContenido
   */
  public obtenerContenido() {
    return this.contenido;
  }
}

let cajaDeString = new Caja<string>("Libros");
console.log("Contendio de la caja de string: ", cajaDeString.obtenerContenido());

