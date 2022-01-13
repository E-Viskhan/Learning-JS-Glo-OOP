import { Programmer } from "../models/Programmer";

export class ProgrammersService {
  getProgrammers() {
    const json = localStorage.getItem('programmers');
    const arr = JSON.parse(json);
    let programmers = [];

    if (!arr) { return programmers; }

    arr.forEach(programmer => {
      programmers.push(
        new Programmer(
          programmer._id,
          programmer._lastname,
          programmer._firstname,
          programmer._age,
          programmer._isMarried,
          programmer._level,
          programmer._experience,
          programmer._salary
        ));
    });

    return programmers;
  }

  setProgrammers(programmers) {
    localStorage.setItem('programmers', JSON.stringify(programmers));
  }
};