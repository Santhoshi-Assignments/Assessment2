
function submitForm() {
   
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords does not match!");
        return;
    }

    var userData = {
        userName: document.getElementById("userName").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        password: document.getElementById("password").value, 
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "profile.html";
}