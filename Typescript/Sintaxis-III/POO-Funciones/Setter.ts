export class MyDate {
  year: number;
  _month: number;
  // readonly day: number;
  _day: number;

  constructor(year: number, _month: number, _day: number) {
    this.year = year;
    this._month = _month;
    this._day = _day;
  }

  printFormat(): string {
    const _day = this.addPadding(this._day);
    const _month = this.addPadding(this._month);
    return `${_day}/${_month}/${this.year}`;

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
      this._month += amount;
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

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                         setter                          │
  //          ╰─────────────────────────────────────────────────────────╯
  //
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      throw new Error('Month out of range')
    }
  }
}

const myHermosoDate = new MyDate(1993, 7, 9);

console.log(myHermosoDate.printFormat());

myHermosoDate.month = 4;
console.log('run', myHermosoDate.month);
myHermosoDate.month = 78;
console.log('Esto no debe aprarecer', myHermosoDate.month);




