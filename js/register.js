const form = document.querySelector("form")
const fullName = document.querySelector(".fullname")
const email = document.querySelector("#email")
const confirmPassword = document.querySelector("#confirmpassword")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const error = document.querySelector(".error")
 const emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordregx = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

form.addEventListener("submit",function(e){
        e.preventDefault()
        if(fullName.value.length <= 0 || email.value.length <= 0 || confirmPassword.value.length <= 0 || username.value.length <= 0 ||password.value.length <= 0){
            error.textContent = "Please fill in the fields"

        }else if(password.value.length <= 8){
            error.textContent = "The password must be at least 8 characters"
        }
         else if(confirmPassword.value !== password.value){
            error.textContent = "Password fields must match"

        }
        else if(!emailregx.test(email.value)){
             error.textContent = "invalid email"
        }
        else if(!passwordregx.test (password.value)){
            error.textContent = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        }

})