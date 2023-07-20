// Function to handle the sign-up form submission
function handleSignUp(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the values entered in the form fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
  
    // Validate the form inputs
    if (password !== confirmPassword) {
      var errorMessage = document.querySelector('.error-message');
      errorMessage.innerHTML = 'Passwords do not match. Please try again.';
  
      // Add red border to confirm password input field
      var confirmPasswordField = document.getElementById('confirmPassword');
      confirmPasswordField.classList.add('password-error');
    } else {
      // Clear any previous error messages and styles
      var errorMessage = document.querySelector('.error-message');
      errorMessage.innerHTML = '';
  
      var confirmPasswordField = document.getElementById('confirmPassword');
      confirmPasswordField.classList.remove('password-error');
  
      // Perform sign-up logic
      // ... Your sign-up code goes here ...
      alert('Sign up successful!');
      // Redirect the user to the login page or perform any other desired actions
    }
  }
  
  // Attach the handleSignUp function to the sign-up form submission event
  document.getElementById('signupForm').addEventListener('submit', handleSignUp);
  