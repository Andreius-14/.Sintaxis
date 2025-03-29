//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃            Array Anidado              ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


int[,] matriz = new int[3, 4]
{
    { 1, 2, 3, 4 },
    { 5, 6, 7, 8 },
    { 9, 10, 11, 12 },
};

int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[] { 1, 2, 3 };
jaggedArray[1] = new int[] { 4, 5 };
jaggedArray[2] = new int[] { 6, 7, 8, 9 };

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃            Array Objetos              ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Antes
Person[] people =
{
    new Person("David", "Martinez", "Pérez"),
    new Person("Juan", "Pérez", "Martinez"),
    new Person("Antonio", "Martin", "Mora"),
    // ...
};

// Después
Person[] people =
[
    new("David", "Martinez", "Pérez"),
    new("Juan", "Pérez", "Martinez"),
    new("Antonio", "Martin", "Mora"),
    // ...
];
