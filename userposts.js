let myFormEl = document.getElementById("myForm");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let nameEl = document.getElementById("name");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let passwordEl = document.getElementById("password");
let buttonEl = document.getElementById("button");
let navHeadingEl = document.getElementById("nav-heading")
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

passwordEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

});