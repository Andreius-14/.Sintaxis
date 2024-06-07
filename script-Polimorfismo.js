
class Padre {  
  tarea () {
    console.log('Tarea del Padre')
  }
}

class Hijo extends Padre {
  tarea () {
    super.tarea()
    console.log('Tarea del Hijo')
  }
}

const Cain = new Hijo()
Cain.tarea()
