class Human {
  public date: Date;
  constructor(date: Date) {
    this.date = date ?? new Date();
  }
  isProgrammer(): boolean {
    return false;
  }
}

// @ts-ignore
class User extends Human {
  _name: string;
  _hobbies: string[] = ["a", "b"];
  constructor(name: string, date: Date) {
    super(date);
    this._name = name;
  }
  get hobbies(): string[] {
    return this._hobbies;
  }
  addHobbies(hobby: string): void {
    this.hobbies.push(hobby);
  }
  set name(name: string) {
    this._name = name;
  }
  override isProgrammer(): boolean {
    return true;
  }
}

const user: User = new User("Alex", new Date("1994-09-13"));
user.addHobbies("c");
console.log(user.isProgrammer());

console.log(user);
