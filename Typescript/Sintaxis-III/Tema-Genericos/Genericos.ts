//          ╭─────────────────────────────────────────────────────────╮
//          │                        Genericos                        │
//          ╰─────────────────────────────────────────────────────────╯
//
// - Cuando la funcion que necesitas debe poder ajustarse
// - ajustarse a los valores que le envias 
// - lo mas seguor es que lo usaras en funciones
// ──────────────────────────────────────────────────────────────────────
// - elige el nombre <name>

// ──────────────────────────────────────────────────────────────────────
// function getFirstElement(array:number ) {
//   return array[0]
// }
//
// const numbers = [ 1,2,3]
// const firstNum = getFirstElement(number)
// ──────────────────────────────────────────────────────────────────────

// reemplaza la asignacion de tipo de variable por el nombre deel Generico
// La funcion se adapta
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0]
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers)

const string = ['Hola', 'ramera', 'vendame', 'una rama'];
const firstString = getFirstElement(numbers)

//          ╭─────────────────────────────────────────────────────────╮
//          │                  Asignacion Explicita                   │
//          ╰─────────────────────────────────────────────────────────╯
const number2 = [1, 2, 3];
const firstNum2 = getFirstElement<number>(number2)


const input = document.querySelector<HTMLHtmlElement>("input");


const map = new Map<string, number>();
map.set("sdt", 3)


//          ╭─────────────────────────────────────────────────────────╮
//          │                     Tipos Genericos                     │
//          ╰─────────────────────────────────────────────────────────╯

type ApiResponseBasico = {
  data: any,
  isError: boolean
}

const responseBasico: ApiResponseBasico = {
  data: {
    name: "Kay",
    edad: 23,
  },
  isError: false,
}

// ──────────────────────────────────────────────────────────────────────

type ApiResponse<Data> = {
  data: Data,
  isError: boolean
}

type UserResponse = ApiResponse<{ name: string; age: number }>
type BlogResponse = ApiResponse<{ title: string }>


const response: UserResponse = {
  data: {
    name: "Kay",
    age: 23,
  },
  isError: false,
}


const responseBlog: BlogResponse = {
  data: {
    title: "sdf",
  },
  isError: false,
}
