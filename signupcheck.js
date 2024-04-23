function message() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    
    // Validation for username and email
    if (username.value.trim() === '' || email.value.trim() === '') {
        alert("Fields Can't be Empty");
        return;
    }

    // Validation for phone number
    var phoneValue = phone.value.trim();
    if (!/^\d{10}$/.test(phoneValue)) {
        alert("Phone number must be a 10-digit number");
        return;
    }

    // Validation for email
    if (!isValidEmail(email.value.trim())) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Success");
}

// Function to check if email is valid
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
        return false;
    }
    return true;
}
