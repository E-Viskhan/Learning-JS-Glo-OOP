import { Driver } from "../models/Driver";

export class DriversService {
  getDrivers() {
    const json = localStorage.getItem('drivers');
    const arr = JSON.parse(json);
    let drivers = [];

    if (!arr) { return drivers; }

    arr.forEach(driver => {
      drivers.push(
        new Driver(
          driver._id,
          driver._lastname,
          driver._firstname,
          driver._age,
          driver._isMarried,
          driver._drivingExperience,
          driver._workingCar,
        ));
    });

    return drivers;
  }

  setDrivers(drivers) {
    localStorage.setItem('drivers', JSON.stringify(drivers));
  }
};