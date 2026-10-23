console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));


//          ╭─────────────────────────────────────────────────────────╮
//          │                         static                          │
//          ╰─────────────────────────────────────────────────────────╯
// accesible sin istancias
//
class MyMath {

  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    // console.log(numbers);
    return numbers[0]

  }
}

console.log('MYMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(122, 2, 1, 12, 9));




