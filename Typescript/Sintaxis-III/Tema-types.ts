// Puede tener 
// - Propiedades 
// - No Metodos

// No aparece complilador en javascripct 
//
type PersonaType = {
  nombre: string;
  edad: number;
}


type Parcial<T> = {
  [K in keyof T]?: T[K];

};

type PersonaParcial = Parcial<PersonaType>;

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
}

type PersonaSoloLectura = SoloLectura<PersonaType>;

let persona = PersonaSoloLectura = {
  nombre: "Amin",
  edad: 39
};

console.log(persona.nombre);


// Template literal types 

type Variantes = "perqueño" | "mediano" | "grande";
type ClasesCSS = `boton ${Variantes}`;


// Condicional types 

// Permite un fuerte tipado 
