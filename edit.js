// Get the form and patient data elements
const form = document.getElementById('edit-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dobInput = document.getElementById('dob');
const addressInput = document.getElementById('address');
const messageDiv = document.getElementById('message');

// Get the patient ID from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const patientId = urlParams.get('id');

// Retrieve the patient data from the patients array
const patientData = patients[patientId];

// Populate the form fields with the patient data
nameInput.value = patientData.name;
emailInput.value = patientData.email;
phoneInput.value = patientData.phone;
dobInput.value = patientData.dob;
addressInput.value = patientData.address;

// Add event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate the form data
  const patient = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    dob: dobInput.value,
    address: addressInput.value,
  };

  // Update the patient data in the patients array
  patients[patientId] = patient;

  // Update the table row with the new patient data
  const tableRow = tableBody.children[patientId];
  tableRow.innerHTML = `
    <td>${patient.name}</td>
    <td>${patient.email}</td>
    <td>${patient.phone}</td>
    <td>${patient.dob}</td>
    <td>${patient.address}</td>
    <td>
      <a href="edit.html?id=${patientId}" class="edit-link">Edit</a>
      <a href="delete.html?id=${patientId}" class="delete-link">Delete</a>
    </td>
  `;

  // Display a success message
  messageDiv.textContent = 'Patient updated successfully!';
  setTimeout(() => {
    messageDiv.textContent = '';
  }, 3000);

  // Redirect to the newpatient.html page
  window.location.href = 'newpatient.html';
});