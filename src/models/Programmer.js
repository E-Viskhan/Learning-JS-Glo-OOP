import { Employee } from './Employee';

export class Programmer extends Employee {
  constructor(firstname, lastname, age, isMarried, level, experience, salary) {
    super(firstname, lastname, age, isMarried);
    this.level = level;
    this.experience = +experience;
    this.salary = +salary;
  }

  set level(level) {
    this._level = level;
  }

  get level() {
    return this._level;
  }

  set experience(experience) {
    this._experience = experience;
  }

  get experience() {
    return this._experience;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._salary = salary;
  }
}