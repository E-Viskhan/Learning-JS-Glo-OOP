import { Employee } from "./Employee";

export class Driver extends Employee {
  constructor(firstname, lastname, age, isMarried, drivingExperience, workingCar) {
    super(firstname, lastname, age, isMarried);
    this.drivingExperience = +drivingExperience;
    this.workingCar = workingCar;
  }

  set drivingExperience(years) {
    this._drivingExperinve = years;
  }

  get drivingExperience() {
    return this._drivingExperinve;
  }

  set workingCar(car) {
    this._workingCar = car;
  }

  get workingCar() {
    return this._workingCar;
  }
}