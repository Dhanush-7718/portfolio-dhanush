console.log("JS Loaded");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  console.log("Form submitted");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("http://127.0.0.1:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent successfully!");
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error sending message");
  });
});
