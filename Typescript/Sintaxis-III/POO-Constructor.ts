
// export class MyDate {
//   year: number;
//   month: number;
//   // readonly day: number;
//   day: number;
//
//   constructor(year: number, month: number, day: number) {
//     this.year = year;
//     this.month = month;
//     this.day = day;
//   }
//
// }
//

//abreviado 
//- crear campos 
//- asigna campos
//
export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) { }

}
