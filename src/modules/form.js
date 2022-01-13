import { Programmer } from '../models/Programmer';
import { Driver } from '../models/Driver';
import { render } from './render';

const form = () => {
  const form = document.getElementById('workers-form');
  const workersType = document.getElementById('workers-type');
  const programmerInputs = document.querySelectorAll('.programmer-info');
  const driverInputs = document.querySelectorAll('.driver-info');

  const showInput = (input) => {
    input.classList.remove('d-none');
    input.disabled = false;
  };

  const hideInput = (input) => {
    input.classList.add('d-none');
    input.disabled = true;
    input.value = '';
  };

  const toggleShowInputs = () => {
    const worker = workersType.value;

    if (worker === 'Programmer') {
      programmerInputs.forEach(input => showInput(input));
      driverInputs.forEach(input => hideInput(input));
    } else if (worker === 'Driver') {
      programmerInputs.forEach(input => hideInput(input));
      driverInputs.forEach(input => showInput(input));
    } else {
      programmerInputs.forEach(input => hideInput(input));
      driverInputs.forEach(input => hideInput(input));
    }
  };

  workersType.addEventListener('input', toggleShowInputs);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    let formValues = [];
    for (let [, value] of formData) {
      formValues.push(value);
    }

    if (workersType.value === 'Programmer') {
      const programmers = programmersService.getProgrammers();
      const nextId = programmers.length;
      const programmer = new Programmer(nextId, ...formValues);

      programmers.push(programmer);
      render('programmers', programmers);

      programmersService.setProgrammers(programmers);
      programmerInputs.forEach(input => hideInput(input));
    } else if (workersType.value === 'Driver') {
      const drivers = driversService.getDrivers();
      const nextId = drivers.length;
      const driver = new Driver(nextId, ...formValues);

      drivers.push(driver);
      render('drivers', drivers);

      driversService.setDrivers(drivers);
      driverInputs.forEach(input => hideInput(input));
    }

    form.reset();
  });
};

export default form;