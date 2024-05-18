document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
   
    // You can add further validation here

    // Example: Check if name is not empty
    if (!name.trim()) {
        alert('Please enter your name.');
        return;
    }

    // Example: Check if email is valid
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Example: Check if message is not empty
   

    // If all validations pass, you can submit the form or perform further actions here
   
});
function add(){
    alert('Form submitted successfully!')
}