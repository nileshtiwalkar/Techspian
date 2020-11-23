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
