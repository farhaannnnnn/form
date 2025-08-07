// When form is submitted
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const eventType = document.getElementById("eventType").value;

  // Error collection
  let errors = [];

  // Validate name: at least 2 letters, only alphabets and spaces
  if (!/^[A-Za-z ]{2,}$/.test(name)) {
    errors.push("Name must be at least 2 characters and contain only letters and spaces.");
  }

  // Validate email using simple regex
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Invalid email format.");
  }

  // Validate phone: exactly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    errors.push("Phone number must be exactly 10 digits.");
  }

  // Validate age: must be 18 or above
  if (isNaN(age) || age < 18) {
    errors.push("You must be at least 18 years old.");
  }

  // Validate event type: must select one
  if (!eventType) {
    errors.push("Please select an event type.");
  }

  // Display error messages or success
  const errorDiv = document.getElementById("errorContainer");
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.map(err => `<p>• ${err}</p>`).join('');
  } else {
    errorDiv.style.color = "green";
    errorDiv.innerHTML = "✅ Registration successful!";
    
  }
});
