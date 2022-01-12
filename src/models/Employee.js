export class Employee {
  constructor(firstname, lastname, age, isMarried) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = +age;
    this.isMarried = isMarried;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    if (firstname.length < 2) { throw new Error('The value being set for firstname is too short'); }
    else if (firstname.length > 50) { throw new Error('The value being set for firstname is too long'); }
    this._firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastname) {
    if (lastname.length < 2) { throw new Error('The value being set for lastname is too short'); }
    else if (lastname.length > 50) { throw new Error('The value being set for lastname is too long'); }
    this._lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (age < 0) { throw new Error('The age cannot be less than zero'); }
    else if (age > 200) { throw new Error('The age cannot be more than 200 years'); }
    this._age = age;
  }

  get isMarried() {
    return this._isMarried;
  }

  set isMarried(isMarried) {
    if (typeof isMarried === 'boolean') {
      this._isMarried = isMarried;
    } else if (isMarried === 'true' || isMarried === 'false') {
      this._isMarried = Boolean(isMarried);
    } else {
      throw new Error('isMarried can only take the values true or false');
    }
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(fullname) {
    [this.firstname, this.lastname] = fullname.split(' ');
  }
}