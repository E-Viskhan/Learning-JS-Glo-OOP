import { Driver } from "../models/Driver";
import { Programmer } from "../models/Programmer";
import { render } from "./render";

const table = () => {
  const programmers = programmersService.getProgrammers();
  const drivers = driversService.getDrivers();
  const programmersTbody = document.getElementById('programmers-table-body');
  const driversTbody = document.getElementById('drivers-table-body');

  render('programmers', programmers);
  render('drivers', drivers);

  programmersTbody.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-remove')) { return; }
    const userId = e.target.closest('tr').dataset.key;
    Programmer.remove(userId);
  });

  driversTbody.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-remove')) { return; }
    const userId = e.target.closest('tr').dataset.key;
    Driver.remove(userId);
  });
};

export default table;