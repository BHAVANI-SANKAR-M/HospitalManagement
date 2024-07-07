// Get the input fields
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const errorElement = document.getElementById('error-message');

// Add event listener to the login button
loginButton.addEventListener('click', validateLogin);

// Function to validate the login credentials
function validateLogin() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the username is empty
  if (username === '') {
    setError('Username is required');
    return;
  }

  // Check if the password is empty
  if (password === '') {
    setError('Password is required');
    return;
  }

  // Check if the password meets the requirements
  if (!validatePassword(password)) {
    setError('Password must be at least 8 characters, alphanumeric, and contain uppercase, lowercase, and special characters');
    return;
  }

  // If all checks pass, login is successful
  console.log('Login successful!');
  // You can add your login logic here, such as making an API call or redirecting to a new page
}

// Function to validate the password
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Function to set the error message
function setError(message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}