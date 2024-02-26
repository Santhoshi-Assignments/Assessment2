function submitLoginForm() {
    var enteredUsername = document.getElementById("Username").value;
    var enteredPassword = document.getElementById("Password").value;

    
    var storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
        alert("User not found. Please register first.");
        return;
    }

   
    if (enteredUsername === storedUserData.userName && enteredPassword === storedUserData.password) {
       
        window.location.href = "profile.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}


document.addEventListener("input", function () {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;
    var loginButton = document.getElementById("loginButton");

    usernameError.style.display = Username ? "none" : "block";
    passwordError.style.display = Password ? "none" : "block";

    loginButton.disabled = !(Username && Password);
});

