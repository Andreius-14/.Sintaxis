
import { Persona } from "./Herencia.01"


export class Empleado extends Persona {
  public puesto: string;
  constructor(nombre: string, edad: number, esDesarrollador: boolean, puesto: string) {
    super(nombre, edad, esDesarrollador)
    this.puesto = puesto;
  }


  public saludar(): string {
    return `${super.saludar()} trabajo como ${this.puesto}`;
  }


  public obtenerInfo(): string {
    return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.puesto}`

  }

}

// let persona = new Persona("Juan", 30, true);

// console.log(persona.saludar());

