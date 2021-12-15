export abstract class Person {
  public firstName = '';;
  public lastName = '';
  // ALL Classes in TypeScript are PUBLIC by DEFAULT, try to make this obvious. You don't need the public keywords up above, but add them anyway.
  //Getters and setters! They work like below. Use set if you want to set something.
  get fullName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}
