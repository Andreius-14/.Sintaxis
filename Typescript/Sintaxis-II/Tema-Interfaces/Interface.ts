//          ╭─────────────────────────────────────────────────────────╮
//          │                        Interaces                        │
//          ╰─────────────────────────────────────────────────────────╯
//         Un contrato que todos deben cumplir
// - Es un contrato 
// - No permiten Objetos Privados

export interface Driver {
  // campos 
  database: string;
  password: string;
  port: number;
  //metodos 
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }

  disconnect(): void {

  }
  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    //code
  }
}

