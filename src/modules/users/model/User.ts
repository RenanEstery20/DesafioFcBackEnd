import { v4 as uuidv4 } from "uuid";

class User {
  id?: String;
  name: String;
  email: String;
  password: String;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
