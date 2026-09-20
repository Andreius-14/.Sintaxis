//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               Numerico                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// => Importante
const float PI = 3.14159F;

// => Enteros

int num = 15; // Rango: +-2.147.483.647
short num1 = 50; // Rango: +- 32767
long num3 = 25; // Rango: +-9.223.372.036.854.775.807

// => Decimales

float num4 = 15.12345678F; // Redondea el número
double num5 = 15.12345678; // NO redondea el número

decimal precio = 19.99m; // Precisión decimal (16 bytes)

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               Extra                   ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

char R = 'A'; // Un solo carácter
bool L = true; // Verdadero o Falso

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               Extra                   ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
string nombre = "Juan"; // Cadena de texto (inmutable)
dynamic dinamico = "Hola"; // Tipo resuelto en ejecución
int[] arreglo = { 1, 2, 3 }; // Arreglo

// 3. Tipos Especiales
DateTime fecha = DateTime.Now; // Fecha y hora (struct)
var inferencia = "C#"; // Tipo inferido (string)
int? nullable = null; // Entero que permite null
