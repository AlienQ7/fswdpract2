<script>

// Get form element
const form = document.getElementById("regForm");

// Run validation when form is submitted
form.addEventListener("submit", function(event){

    // Prevent default form submission initially
    event.preventDefault();

    // Get values from input fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validation flag
    let isValid = true;

    // Check if name is empty
    if(name === ""){
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    // Check if email contains '@'
    if(!email.includes("@")){
        emailError.textContent = "Email must contain @";
        isValid = false;
    }

    // Check password length
    if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // If all validations pass, submit form
    if(isValid){
        form.submit();
    }

});

</script>
