// Handle the log in form submissions
function handleLogin(event) {
    event.preventDefault();
    
    
  // Get the valies entered in the username and password fields
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  //Perform validation or authentication logic
  if(username === 'admin' && password === 'password'){
    // Successful login
    alert('Login successful');
    //Redirect the user to the home page or perform any other desired actions
    
  }else{
    //Failed login
    var errorMessage = document.querySelector('.error-message');
    errorMessage.innerHTML = 'Invalid username or password. Please try again.';

    var signUpSuggestion = document.createElement('p');
    signUpSuggestion.textContent = "Don't have an account? Sign up now!";
    var signUpButton = document.createElement('button');
    signUpButton.textContent = 'Sign Up';
    signUpButton.addEventListener('click', redirectToSignUpPage);

    //Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

   var loginForm = document.getElementById('loginForm');
   loginForm.appendChild(signUpSuggestion);
   loginForm.appendChild(signUpButton);
  }

}

// Function to redirect the user to the sign-up page
function redirectToSignUpPage() {
    window.location.href = 'signup.html';
}


//Attach the handleLogin function to the login form submission event
document.getElementById('loginForm').addEventListener('submit'. handleLogin);

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: '+ profile.getId());
  console.log('Name: '+ profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: '+ profile.getEmail());
}

