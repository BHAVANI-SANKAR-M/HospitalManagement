// Get the elements
const patientInfoElement = document.getElementById('patient-info');
const deleteBtn = document.getElementById('delete-btn');
const messageElement = document.getElementById('message');

// Sample patient data
const patientData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  dob: '1990-01-01',
  address: '123 Main St, Anytown, USA'
};

// Display patient information
patientInfoElement.textContent = `Name: ${patientData.name}
Email: ${patientData.email}
Phone: ${patientData.phone}
Date of Birth: ${patientData.dob}
Address: ${patientData.address}`;

// Add event listener to the delete button
deleteBtn.addEventListener('click', deletePatient);

// Function to simulate deletion of patient
function deletePatient() {
  // Simulate deletion of patient data
  patientData.name = '';
  patientData.email = '';
  patientData.phone = '';
  patientData.dob = '';
  patientData.address = '';

  // Display success message
  messageElement.textContent = 'Patient deleted successfully!';
  messageElement.style.display = 'block';

  // Clear patient information
  patientInfoElement.textContent = '';
}