//          ╭─────────────────────────────────────────────────────────╮
//          │                        singleton                        │
//          ╰─────────────────────────────────────────────────────────╯
//          - Evita multiples instancias 
//          - solo una instancia en todo el proyecto

export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) { }

  getName() {
    return this.name;

  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log("Deberia entrar una vez");
      MyService.instance = new MyService(name);

    }
    return MyService.instance
  }
}

const s1 = MyService.create('Service 1');
console.log(s1.getName());

const s2 = MyService.create('Service 2');
console.log(s2.getName());

const s3 = MyService.create('Service 3');
console.log(s3.getName());


