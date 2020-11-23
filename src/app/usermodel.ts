export class User {
 
  name: string;
  email: string;
  password: string;
  confromedPassword: string;
  tandc: boolean;
  rememberPassword: boolean;
  constructor(u) {
    this.name = u.name || "";
    this.email = u.email || "";
    this.confromedPassword = u.confromedPassword || "";
    this.tandc = u.tandc || false;
    this.rememberPassword = u.rememberPassword || false;

  }

}
export class Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
  
  constructor(p){
    this.id=p.id||0;
    this.name=p.name||'';
    this.price=p.price||0;
    this.quantity=p.quantity||0;

  }
  
}
