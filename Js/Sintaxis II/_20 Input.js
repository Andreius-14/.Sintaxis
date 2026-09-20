// ┌───────────────────────────────────┐
// │      CONFIRM                      │
// └───────────────────────────────────┘

prompt('Ingrese un valor')	// -> El usuario Ingresara un valor

// ┌───────────────────────────────────┐
// │      CONFIRM                      │
// └───────────────────────────────────┘

// Ejemplo de confirm()

const respuesta = confirm('¿Quieres continuar?')
console.log(respuesta ? 'Aceptar' : 'Cancelar')

// ASCII emulando la ventana de confirm()
console.log(`
  ┌─────────────────────┐
  │ ¿Quieres continuar? │
  ├────┬────────────────┤
  │ OK │ Cancel         │
  └────┴────────────────┘
`)

// Ejemplo práctico
const eliminar = confirm('¿Eliminar archivo?')
console.log(eliminar ? 'Eliminado' : 'Cancelado')
