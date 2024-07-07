// Get the form and table elements
const form = document.getElementById('patient-form');
const tableBody = document.getElementById('patients-tbody');
const messageDiv = document.getElementById('message');

// Create an array to store patient data
let patients = [];

// Function to add a new patient to the array and table
function addPatient(patient) {
  patients.push(patient);
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${patient.name}</td>
    <td>${patient.email}</td>
    <td>${patient.phone}</td>
    <td>${patient.dob}</td>
    <td>${patient.address}</td>
    <td>
      <a href="edit.html?id=${patients.length - 1}" class="edit-link">Edit</a>
      <a href="delete.html?id=${patients.length -1}" class="delete-link">Delete</a>
    </td>
  `;
  tableBody.appendChild(row);
}

// Function to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const patient = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    dob: document.getElementById('dob').value,
    address: document.getElementById('address').value,
  };
  addPatient(patient);
  form.reset();
  messageDiv.textContent = 'Patient added successfully!';
  setTimeout(() => {
    messageDiv.textContent = '';
  }, 3000);
});

// Function to handle delete link clicks
tableBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-link')) {
    const id = e.target.dataset.id;
    patients.splice(id, 1);
    tableBody.removeChild(tableBody.children[id]);
  }
});