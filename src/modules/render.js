export const render = (workersType, workers) => {
  const tbody = document.getElementById(`${workersType}-table-body`);
  tbody.innerHTML = '';

  workers.forEach(worker => {
    tbody.insertAdjacentHTML('beforeend', `
      <tr data-key=${worker.id}>
        <th scope="row">${worker.id + 1}</th>
        <td>${worker.lastname}</td>
        <td>${worker.firstname}</td>
        <td>${worker.age}</td>
        <td>${worker.isMarried ? 'Да' : 'Нет'}</td>
        <td>${workersType === 'drivers' ? worker.drivingExperience : worker.level}</td>
        <td>${workersType === 'drivers' ? worker.workingCar : worker.experience}</td>
        ${workersType === 'drivers' ? '' : `<td>${worker.salary}</td>`}
        <td>
          <button type="button" class="btn btn-danger btn-remove">
            <i class="bi-person-x"></i>
          </button>
        </td>
      </tr>
    `);
  });
};