//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃              Flechas                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

public override string ToString() => $"{fname} {lname}".Trim();

static double divideNumeros(double num1, int num2) => num1 / num2;

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                Output                 ┃  VOID
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// => Uso de Return
static int MyMethod(int x)
{
    return 5 + x;
}

static void Main(string[] args)
{
    Console.WriteLine(MyMethod(3));
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃              Parametros               ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// ┌────
// │  => MULTIPLES
// └────
static double Suma(int num1, double num2, double num3 = 0)
{
    return num1 + num2 + num3;
}

// ┌────
// │  => PREDETERMINADOS
// └────
static void MyMethod(string country = "Norway")
{
    Console.WriteLine(country);
}

MyMethod("Sweden");
MyMethod("India");
MyMethod();
MyMethod("USA");

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                Input                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

static void PrintOrderDetails(string sellerName, int orderNum, string productName)
{
    Console.WriteLine($"Seller: {sellerName}, Order Number: {orderNum}, Product: {productName}");
}

// [ Predeterminado ]
PrintOrderDetails("Gift Shop", 31, "Red Mug");

// [  Desordenado  ]
PrintOrderDetails(orderNum: 31, productName: "Red Mug", sellerName: "Gift Shop");
PrintOrderDetails(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);

// [  Mixto  ]
PrintOrderDetails("Gift Shop", 31, productName: "Red Mug");
PrintOrderDetails(sellerName: "Gift Shop", 31, productName: "Red Mug"); // C# 7.2 onwards
PrintOrderDetails("Gift Shop", orderNum: 31, "Red Mug"); // C# 7.2 onwards

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             Sobrecarga                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Metodos con el Mismo Nombre

static int PlusMethod(int x, int y)
{
    return x + y;
}

static double PlusMethod(double x, double y)
{
    return x + y;
}

static void Main(string[] args)
{
    int myNum1 = PlusMethod(8, 5);
    double myNum2 = PlusMethod(4.3, 6.26);
    Console.WriteLine("Int: " + myNum1);
    Console.WriteLine("Double: " + myNum2);
}

int MyMethod(int x);

float MyMethod(float x);

double MyMethod(double x, double y);
