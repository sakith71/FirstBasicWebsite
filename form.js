var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");

function validateName() {
var name = document.getElementById("contact-name").value;

if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
}
if (!name.match(/^[A-Za-z\s'-]+$/)) {
    nameError.innerHTML = "Write your name correctly";
    return false;
}
nameError.innerHTML = "";
return true;
}

function sendMail() {
const email ="akithaudara82@gmail.com";
alert("Succesfully submit feedback! ")

location.href = "mailto:"+email;
location.reload();
}

function editButtonClick() {
document.getElementById("Confirmation").style.display = "none";
document.getElementById("feedbackForm").style.display = "block";
}
function validateEmail() {
var email = document.getElementById("contact-email").value;
if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
}
if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "email invaild";
    return false;
}
emailError.innerHTML = "";
return true;
}

function displayFormDetails() {
var name = document.getElementById("contact-name").value;
var email = document.getElementById("contact-email").value;
var firstTime = document.querySelector(
    'input[name="firstTime"]:checked'
).value;
var informative = document.querySelector(
    'input[name="informative"]:checked'
).value;
var message = document.getElementById("message").value;
var rate = document.querySelector('input[name="rate"]:checked').value;

// Construct the details string
// Construct the details string
var details = "Name: " + name + "<br>";
details += "Email: " + email + "<br>";
details += "First Time Visiting: " + firstTime + "<br>";
details += "Informative and Easy to Navigate: " + informative + "<br>";
details += "Feedback: " + message + "<br>";
details += "Rate: " + rate;

document.getElementById("detailsID").innerHTML = details;

// Display details in a new window or modal
document.getElementById("feedbackForm").style.display = "none";
document.getElementById("Confirmation").style.display = "block";
}

// Attach event listener to the form submission
document
.getElementById("feedbackForm")
.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateName() && validateEmail()) {
    displayFormDetails();
    // Optionally, you can submit the form here if needed
    } else {
    submitError.innerHTML = "Complete the form properly";
    }
});