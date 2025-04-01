document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const emailInput = document.getElementById("email");
  const errorLabel = document.querySelector(".email-error-label");
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const successCard = document.querySelector(".success-card");
  const successEmailSpan = document.querySelector(".success-card .span");
  const dismissBtn = document.querySelector(".success-card button");
  const mainCard = document.querySelector(".main-card");

  // Hide success card initially
  successCard.style.display = "none";

  subscribeBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission

    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
      errorLabel.style.display = "none"; // Hide error message
      successEmailSpan.textContent = email; // Update the success message with the user's email

      // Hide main card and show success message
      mainCard.style.display = "none";
      successCard.style.display = "block";
    } else {
      errorLabel.style.display = "block"; // Show error message
    }
  });

  // Dismiss button to go back to the form
  dismissBtn.addEventListener("click", function () {
    successCard.style.display = "none"; // Hide success message
    mainCard.style.display = "flex"; // Show form again
    emailInput.value = ""; // Clear input field
  });
});
