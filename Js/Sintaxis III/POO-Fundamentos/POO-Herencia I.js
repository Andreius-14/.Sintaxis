class Libro {
  constructor(titulo, autor, year) {
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
  }
}

//[Herencia]
//-- Hereda los Atributos [extends]
//-- Efectúa la Herencia [super()]
//-- Declara parámetro extra [this.]
class Revista extends Libro {
  constructor(titulo, autor, year, mes) {
    super(titulo, autor, year);
    this.mes = mes;
  }
}

/*

[Herencia]
-- Necesitar repetir los parametros del constructor original. usa Abreviaciones.
*/

//class Profesor extends Usuario {
//  constructor(n, a, c, ac, cd) {
//    super(n, a, c, ac);
//    this.cursosDictados = cd;
//  }
//}

//class Alumno extends Usuario {
//  constructor(nombres, apellidos, correo, activo, cursosTomados) {
//    this.cursosTomados = cursosTomados;
//  }
//}

/*

[Herencia]
-- Necesitar repetir los parametros del constructor original. usa Abreviaciones.
*/
