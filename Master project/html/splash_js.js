// Function to redirect to the Home page
function redirectToHome() {
  window.location.href = "";
}

// After 4 seconds, redirect to the Home page
setTimeout(redirectToHome, 4000);

// Function to handle clicking on the "X" button
document.addEventListener("DOMContentLoaded", function() {
  var closeButton = document.getElementById("close-button");
  if (closeButton) {
    closeButton.addEventListener("click", redirectToHome);
  }
});
