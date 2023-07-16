const form = document.querySelector("form")
const fullName = document.querySelector(".fullname")
const email = document.querySelector("#email")
const confirmPassword = document.querySelector("#confirmpassword")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const error = document.querySelector(".error")

form.addEventListener("submit",function(e){
        e.preventDefault()
        if(fullName.value.length <= 0 || email.value.length <= 0 || confirmPassword.value.length <= 0 || username.value.length <= 0 ||password.value.length <= 0){
            error.textContent = "Please fill in the fields"

        }else if(password.value.length <= 8){
            error.textContent = "The password must be at least 8 characters"
        }
         else if(confirmPassword.value !== password.value){
            error.textContent = "Password filled must match"

        }

})