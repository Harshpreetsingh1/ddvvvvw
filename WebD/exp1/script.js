document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    let isValid = true;

    // 1. Name Validation: 9-50 characters
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim();

    if (nameValue.length < 9 || nameValue.length > 50) { // Check length
        nameInput.classList.add('error');
        nameError.classList.add('visible');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
        nameError.classList.remove('visible');
    }

    // 2. Email Validation: Standard email regex
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value.trim();
    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('error');
        emailError.classList.add('visible');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.classList.remove('visible');
    }

    // 3. Age Validation: 16-30
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    const ageValue = parseInt(ageInput.value);

    // Check if empty or out of range
    if (isNaN(ageValue) || ageValue < 16 || ageValue > 30) {
        ageInput.classList.add('error');
        ageError.classList.add('visible');
        isValid = false;
    } else {
        ageInput.classList.remove('error');
        ageError.classList.remove('visible');
    }

    // If all valid, you can proceed (e.g., alert success or submit)
    if (isValid) {
        alert('Registration Successful!');
        // document.getElementById('registrationForm').submit(); // Uncomment to actually submit
    }
});
