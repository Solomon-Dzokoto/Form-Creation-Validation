document.addEventListener("DOMContentLoaded",()=>{
const form = document.getElementById('registration-form')
const feedbackDiv = document.getElementById('form-feedback')

console.log(form)
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const username = document.getElementById('username').value.trim()
   const email = document.getElementById('email').value.trim()
   const password = document.getElementById('password').value.trim()
   
   let isValid = true
   const messages = []

   if (username.length < 3){
    isValid = false
    messages.push("Your username must be more than 3 letters")
   }
   if (!email.includes("@") || !email.includes(".") ){
    isValid = false
    messages.push("Your email must include @ and .")
   }
   if (password.length < 8 ){
    isValid = false
    messages.push("Password must be more than 7 words or digits")
   }

   feedbackDiv.style.display = "block"

   if(isValid){
    feedbackDiv.textContent = "Registration successful!"
    feedbackDiv.style.color = "#28a745"
   }else{
   feedbackDiv.innerHTML =  messages.join("<br>")
    feedbackDiv.style.color = "#dc3545"
   }
})
})

