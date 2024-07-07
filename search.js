const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');
const patientIdInput = document.getElementById('patientId');

searchBtn.addEventListener('click', () => {
  const patientId = patientIdInput.value.trim();

  // Simulate fetching data from server (replace with actual API call)
  const patientData = simulatePatientData(patientId);

  if (patientData) {
    resultsDiv.classList.add('success');
    resultsDiv.textContent = Patient Found! Details: ${patientData};
  } else {
    resultsDiv.classList.add('failure');
    resultsDiv.textContent = 'Patient Not Found!';
  }

  // Clear previous results styling after some time
  setTimeout(() => {
    resultsDiv.classList.remove('success', 'failure');
    resultsDiv.textContent = '';
  }, 3000);
});

// Simulate fetching patient data (replace with actual logic)
function simulatePatientData(id) {
  // Replace with your actual logic to fetch data from server
  // This is just a simulation for demo purposes
  const patients = {
    '1234': 'John Doe, Age: 30',
    '5678': 'Jane Smith, Age: 25'
  };

  return patients[id];
}