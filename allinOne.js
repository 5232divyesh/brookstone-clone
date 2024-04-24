$(document).ready(function () {
    $(".cart").click(function () {
        $(".addToCard").slideToggle("slow");
    });
});
$(document).ready(function () {
    $(".bi-x").click(function () {
        $(".addToCard").slideToggle("slow");
    });
});


let signUpForm = document.querySelector("#signUpForm")
let arr = [];
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let submitObj = {
        FirstName: document.querySelector("#FirstName").value,
        LastName: document.querySelector("#LastName").value,
        SignUpEmail: document.querySelector("#SignUpEmail").value,
        SignUpPassword: document.querySelector("#SignUpPassword").value
    }
    arr.push(submitObj);
    localStorage.setItem("userInfo", JSON.stringify(arr))

    document.querySelector("#FirstName").value = ""
    document.querySelector("#LastName").value = ""
    document.querySelector("#SignUpEmail").value = ""
    document.querySelector("#SignUpPassword").value = ""
})


let logInForm = document.querySelector("#logInForm")
let AcData = JSON.parse(localStorage.getItem("userInfo"))
console.log(AcData)
logInForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let LoginObj = {
        LoginEmail: document.querySelector("#LoginEmail").value,
        LoginPassword: document.querySelector("#LoginPassword").value,
    }
    let store = AcData.filter((el) => el.SignUpEmail == LoginObj.LoginEmail && el.SignUpPassword == LoginObj.LoginPassword)

    // console.log(store) 
    if (store[0]) {
        alert("Logged In Successfully!")
        window.location.href = "index.html"
    } else {
        alert("Invalid Email or Password.")
    }
})