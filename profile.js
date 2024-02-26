document.addEventListener("DOMContentLoaded", function () {
    displayProfile();
});

function displayProfile() {
   
    var userData = JSON.parse(localStorage.getItem("userData"));

    document.getElementById("profileFirstName").innerText = userData.firstName;
    document.getElementById("profileLastName").innerText = userData.lastName;
    document.getElementById("profileDob").innerText = userData.dob;
    document.getElementById("profileGender").innerText = userData.gender;

    var inputFields = document.getElementsByClassName("profile-input");
    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].readOnly = true;
    }
}
