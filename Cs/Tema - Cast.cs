int myInt = 9;

// Automatic casting
// int to double
double myDouble = myInt;

Console.WriteLine(myInt); // 9
Console.WriteLine(myDouble); // 9


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃        Conversion Implicita           ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

//   char -> int -> long -> float -> double

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃        Conversion Explicita           ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

//   double -> float -> long -> int -> char
//
//   Para convertir se necesita código como:
//     Convert.ToBoolean(...)
//     Convert.ToString(...)
//     Convert.ToInt64(long)
//     Convert.ToDouble(...)
//     Convert.ToInt32(int)
