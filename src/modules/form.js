import { Programmer } from '../models/Programmer';
import { Driver } from '../models/Driver';

const form = () => {
  const form = document.getElementById('workers-form');
  const workersType = document.getElementById('workers-type');
  const programmerInputs = document.querySelectorAll('.programmer-info');
  const driverInputs = document.querySelectorAll('.driver-info');

  const toggleShowInputs = () => {
    const worker = workersType.value;

    const showInput = (input) => {
      input.classList.remove('d-none');
      input.disabled = false;
    };

    const hideInput = (input) => {
      input.classList.add('d-none');
      input.disabled = true;
      input.value = '';
    };

    if (worker === 'Programmer') {
      programmerInputs.forEach(input => showInput(input));
      driverInputs.forEach(input => hideInput(input));
    } else if (worker === 'Driver') {
      programmerInputs.forEach(input => hideInput(input));
      driverInputs.forEach(input => showInput(input));
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
      const programmer = new Programmer(...formValues);
      console.log(programmer);
    } else if (workersType.value === 'Driver') {
      const driver = new Driver(...formValues);
      console.log(driver);
    }
  });
};

export default form;