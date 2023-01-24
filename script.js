window.onload = function () {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submit = document.getElementById("submit");
    submit.addEventListener("click", validateEmail);
    submit.addEventListener("click", validatePass);
    submit.addEventListener("click", validateUrl);
}

function validateEmail() {
    var email = document.getElementById("email").value;
    console.log("email: " + email)
    var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!re.test(email)) {
        alert("Invalid email address");
        return false;
    }
    return true;
}
function validatePass() {
    var pass = document.getElementById("password").value;
    console.log("pass: " + pass)
    var re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    if (!re.test(pass)) {
        alert("Incorrect password format");
        return false;
    }
    return true;
}
function validateUrl() {
    var url = document.getElementById("url").value;
 
     var re= /^ (https ?: \/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (!re.test(url)) {
        alert("Invalid URL format,Please enter again.");
        return false;
    }
    return true;
}