const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("icon");
const emailInput = document.getElementById("email");
const btnSubmit = document.getElementById("submit");

const validateEmail = function () {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const email = emailInput.value.toLowerCase();
  if (email.match(emailPattern)) {
    emailInput.value=""
  } else {
    emailInput.classList.add("invalid__email");
    errorMessage.classList.remove("hide");
    errorIcon.classList.remove("hide");
  }
};

const removeError= function(){
  emailInput.classList.remove("invalid__email");
  errorMessage.classList.add("hide");
  errorIcon.classList.add("hide");
}

btnSubmit.addEventListener("click", validateEmail);
emailInput.addEventListener("input", removeError);
