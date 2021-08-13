let myFormEl = document.getElementById("myForm");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let nameEl = document.getElementById("name");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let passwordEl = document.getElementById("password");
let buttonEl = document.getElementById("button");
let navContainerEl = document.getElementById("nav-container")
let nameEntered = "";
let passwordEntered = "";
let jsonDeatils = "";
navContainerEl.classList.add("d-none")
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
function getUserDetails() {
    let option = {
        method: "GET"
    };

    fetch("https://60fe481525741100170784ff.mockapi.io/api/v1/user", option)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            jsonDeatils = jsonData;
            nameEntered = nameEl.value;
        });
}
function displayUserDetails(nameEntered, passwordEntered) {

    for (let item of jsonDeatils) {
        if ((item.password === passwordEntered) && (item.name === nameEntered)) {
            detailsMatched(nameEntered);
            navContainerEl.classList.remove("d-none")
            myFormEl.classList.add("d-none");
            document.getElementById("heading").classList.add("d-none");

        } else {
            document.getElementById("totalErrMsg").textContent = "Invalid user details";
        }
    }
}
buttonEl.onclick = function() {
    let nameEntered = nameEl.value;
    let passwordEntered = passwordEl.value;
    getUserDetails()
    displayUserDetails(nameEntered, passwordEntered);
};