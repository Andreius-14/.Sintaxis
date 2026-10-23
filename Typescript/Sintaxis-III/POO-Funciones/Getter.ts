
//          ╭─────────────────────────────────────────────────────────╮
//          │                         private                         │
//          ╰─────────────────────────────────────────────────────────╯
//          a Campos de variablers 
//          a funciones

export class MyDate {
  year: number;
  month: number;
  // readonly day: number;
  _day: number;

  constructor(year: number, month: number, _day: number) {
    this.year = year;
    this.month = month;
    this._day = _day;
  }

  printFormat(): string {
    const _day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${_day}/${month}/${this.year}`;

  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }

  }

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                         Getter                          │
  //          ╰─────────────────────────────────────────────────────────╯
  //  sE DEeclara la variable base socon _ ____ name 
  //
  // getDay() {
  //   return this.day
  // }
  get day() {
    return this._day
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myHermosoDate = new MyDate(1993, 7, 9);

console.log(myHermosoDate.day);
console.log('1993', myHermosoDate.isLeapYear);


