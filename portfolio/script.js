document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "Thank you for your message!";
  this.reset();
});
