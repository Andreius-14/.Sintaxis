// El nombre mytyoe puede cambiar como quieras
// - Por lo general el nombre es T
function getValue<myType>(value:myType) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;



export class BaseHttpService<TypeClass>{
  // data: TypeClass[] = [];
  getAll(): TypeClass[] | Promise<TypeClass[]> {
    return [];
  }
}

const service = new BaseHttpService<string>();
const service1 = new BaseHttpService<number>();

service.getAll()
service1.getAll

