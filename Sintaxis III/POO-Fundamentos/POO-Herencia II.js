//Se usa en Clases que emplean Herencia y Estos añaden nuevos campos

class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  obtenerDatos() {
    return `${this.name} ${this.lastname}`;
  }
}

class Empleado extends Persona {
  //Se usa en Clases que emplean Herencia y Estos añaden nuevos campos
  constructor(name, lastname, sueldo) {
    super(name, lastname);
    this.sueldo = sueldo;
  }
}
