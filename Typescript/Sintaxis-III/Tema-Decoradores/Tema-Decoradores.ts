//          ╭─────────────────────────────────────────────────────────╮
//          │                       Decorardore                       │
//          ╰─────────────────────────────────────────────────────────╯
//          debemos habilitar en la conf de typescrip json
//          nombre: primera - letra en mayuscula
//          Se habilita en configuracion
//         - No abusar de los decoradores 
//
//         Son metadados que se añadenal comportamiento
function PersonaDec(target: Function) {
  console.log(target);

  target.prototype.despedir = function (despedida: string) {
    return `${despedida}, ${this.nombre}`
  }

}

@PersonaDec
class Persona2 {
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  /**
   * saludar 
   */
  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`
  }

  despedir!: (despedida: string) => string;
}


let usuario = new Persona2("amin", 39)
console.log(usuario.saludar("hola"));

// console.log(usuario.desp);
/*
  * sin acceso a despedir()
*   requiere:  sobreescirbitir en n la calse
  * */

