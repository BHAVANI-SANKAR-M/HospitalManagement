const patientsTable = document.getElementById('patients-table').getElementsByTagName('tbody')[0];
const paginationContainer = document.getElementById('pagination');
const message = document.getElementById('message');

const API_URL = '/api/patients/'; // Replace with your actual API endpoint
const RECORDS_PER_PAGE = 10; // Number of records to display per page

// Function to fetch and display patient information with pagination
async function getActivePatients(pageNumber = 1) {
  try {
      const newLocal = await fetch($, { API_URL } ? active = true & page : $, { pageNumber } & limit, $, { RECORDS_PER_PAGE });
    const response = newLocal;
    if (!response.ok) {
      throw new Error('Failed to fetch active patients');
    }
    const data = await response.json();

    patientsTable.innerHTML = ''; // Clear previous table content
    if (data.length === 0) {
      message.textContent = 'No active patients found.';
      message.classList.add('info');
      paginationContainer.style.display = 'none'; // Hide pagination if no records
      return;
    }

    message.textContent = ''; // Clear previous messages
    paginationContainer.style.display = 'block'; // Show pagination

    data.forEach((patient) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.email}</td>
        <td>${patient.phone}</td>
      `;
      patientsTable.appendChild(row);
    });

    // Generate pagination links (replace with your preferred library if needed)
    const totalPages = Math.ceil(data.total / RECORDS_PER_PAGE);
    let paginationLinks = '';
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === pageNumber ? 'active' : '';
      paginationLinks += `<li class="${activeClass}">
        <a href="#" data-page-number="${i}">${i}</a>
      </li>`;
    }
    paginationContainer.querySelector('ul').innerHTML = paginationLinks;

  } catch (error) {
    console.error('Error fetching active patients:', error);
    message.textContent = 'An error occurred while fetching active patients.';
    message.classList.add('error');
  }
}

// Event listener for pagination link clicks
paginationContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'A') return; // Only handle clicks on anchor tags

  const pageNumber = parseInt(target.dataset.pageNumber, 10);
  getActivePatients(pageNumber);
});

// Initial load (replace with your logic to trigger initial data fetch)
getActivePatients();