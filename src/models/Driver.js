import { Employee } from "./Employee";
import { render } from "../modules/render";

export class Driver extends Employee {
  constructor(id, lastname, firstname, age, isMarried, drivingExperience, workingCar) {
    super(id, lastname, firstname, age, isMarried);
    this._drivingExperience = +drivingExperience;
    this._workingCar = workingCar;
  }

  set drivingExperience(years) {
    this._drivingExperience = years;
  }

  get drivingExperience() {
    return this._drivingExperience;
  }

  set workingCar(car) {
    this._workingCar = car;
  }

  get workingCar() {
    return this._workingCar;
  }

  static remove(id) {
    let drivers = driversService.getDrivers();
    drivers.splice(id, 1);
    render('drivers', drivers);
    driversService.setDrivers(drivers);
  }
}