const searchBtn = document.getElementById('search-btn');
const resultsDiv = document.getElementById('results');
const patientIdInput = document.getElementById('patientId');
const billContainer = document.getElementById('bill-container');
const patientDetailsDiv = document.getElementById('patient-details');
const roomChargesInput = document.getElementById('room-charges');
const pharmacyChargesInput = document.getElementById('pharmacy-charges');
const diagnosticsChargesInput = document.getElementById('diagnostics-charges');
const totalBillDiv = document.getElementById('total-bill');
const calculateBtn = document.getElementById('calculate-btn');
const printBtn = document.getElementById('print-btn');

// Simulate fetching patient data (replace with actual API call)
function simulatePatientData(id) {
  const patients = {
    '1234': 'John Doe, Age: 30',
    '5678': 'Jane Smith, Age: 25'
  };

  return patients[id];
}

searchBtn.addEventListener('click', () => {
  const patientId = patientIdInput.value.trim();

  // Simulate fetching patient data
  const patientData = simulatePatientData(patientId);

  if (patientData) {
    resultsDiv.classList.add('success');
    resultsDiv.textContent = Patient Found! Details: ${patientData};
    patientDetailsDiv.textContent = patientData;
    billContainer.style.display = 'block'; // Show bill container
  } else {
    resultsDiv.classList.add('failure');
    resultsDiv.textContent = 'Patient Not Found!';
    billContainer.style.display = 'none'; // Hide bill container
    clearBillInputs(); // Clear any previous bill input values
  }

  // Clear previous results styling after some time
  setTimeout(() => {
    resultsDiv.classList.remove('success', 'failure');
    resultsDiv.textContent = '';
  }, 3000);
});

calculateBtn.addEventListener('click', () => {
  const roomCharges = parseFloat(roomChargesInput.value) || 0;
  const pharmacyCharges = parseFloat(pharmacyChargesInput.value) || 0;
  const diagnosticsCharges = parseFloat(diagnosticsChargesInput.value) || 0;

  const totalBill = roomCharges + pharmacyCharges + diagnosticsCharges;

  totalBillDiv.textContent = Total Bill: ₹${totalBill.toFixed(2)}; // Format total bill with 2 decimal places

  // Enable print button only if there's a total bill
  printBtn.disabled = totalBill === 0;
});

printBtn.addEventListener('click', () => {
  // Simulate printing functionality (replace with your actual printing logic)
  alert('Bill printed successfully!');
  clearBillInputs(); // Clear bill inputs after printing
  totalBillDiv.textContent = ''; // Reset total bill display
});

function clearBillInputs() {
  roomChargesInput.value = '';
  pharmacyChargesInput.value = '';
  diagnosticsChargesInput.value = '';
}