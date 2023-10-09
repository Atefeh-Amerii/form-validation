// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("eye-toggle");

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

// Error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("textcolor");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".single-input").appendChild(errorElement);
}

// Handle form submit
const handleFormData = (e) => {
    e.preventDefault();



    //Trimmed 
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    //Pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // for not being repeated errors
    document.querySelectorAll(".single-input .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());
    
    // validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".single-input .error");
    if (errorInputs.length > 0) return;



    // Submitting the form
    form.submit();


}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

//removing errors
//1
fullnameInput.addEventListener("input", () => {
    const errorElement = fullnameInput.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-text")) {
        errorElement.remove();
        fullnameInput.classList.remove("error");
    }
});
//2

emailInput.addEventListener("input", () => {
    const errorElement = emailInput.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-text")) {
        errorElement.remove();
        emailInput.classList.remove("error");
    }
});

//3
dateInput.addEventListener("input", () => {
    const errorElement = dateInput.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-text")) {
        errorElement.remove();
        dateInput.classList.remove("error");
    }
});

//4
genderInput.addEventListener("input", () => {
    const errorElement = genderInput.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-text")) {
        errorElement.remove();
        genderInput.classList.remove("error");
    }
});

//5
passwordInput.addEventListener("input", () => {
    const errorElement = passwordInput.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-text")) {
        errorElement.remove();
        passwordInput.classList.remove("error");
    }
});