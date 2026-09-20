class Padre {
  tarea() {
    console.log("Tarea del Padre");
  }
}

class Hijo extends Padre {
  //super + funcion:
  //Reusamos el msm del padre
  //y Acoplamos el nuestro
  tarea() {
    super.tarea();
    console.log("Tarea del Hijo");
  }
}

const Cain = new Hijo();
Cain.tarea();
