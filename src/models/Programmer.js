import { render } from '../modules/render';
import { Employee } from './Employee';

export class Programmer extends Employee {
  constructor(id, lastname, firstname, age, isMarried, level, experience, salary) {
    super(id, lastname, firstname, age, isMarried);
    this._level = level;
    this._experience = +experience;
    this._salary = +salary;
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

  static remove(id) {
    let programmers = programmersService.getProgrammers();
    programmers.splice(id, 1);
    render('programmers', programmers);
    programmersService.setProgrammers(programmers);
  }
}