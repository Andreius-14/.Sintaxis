// nivel de acceso 
// - public 
// - protected  : privadoi y accesible de sus herencias
// - private 
//    Funciona dentro de su propia casa  dentro de la clase

export class Persona {
  public nombre: string;
  protected edad: number;
  private esDesarrollador: boolean;

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }

  public saludar(): string {
    this.esDev()
    return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
  protected obtenerEdad(): number {
    return this.edad;

  }
  private esDev(): boolean {
    return this.esDesarrollador;
  }
}

// instancia 

// let persona = new Persona("Juan", 30,true);
//
// console.log(persona.saludar());

