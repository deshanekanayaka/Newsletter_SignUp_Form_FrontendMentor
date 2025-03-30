function validateEmail(email) {
  if (!email) return "Email is required";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email";
  }

  return "";
}

function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);

  // submit email and password to an API
}
