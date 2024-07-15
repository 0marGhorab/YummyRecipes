const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const ageInput = document.getElementById("ageInput");
const passwordInput = document.getElementById("passwordInput");
const repasswordInput = document.getElementById("repasswordInput");

const validateContactUs = (e) => {
  const regex = {
    nameInput: /^[a-zA-Z ]+$/,
    emailInput:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    numberInput: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    ageInput: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    passwordInput: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
  };
  let isValid = regex[e.id].test(e.value);
  if (isValid) {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
    e.nextElementSibling.classList.remove("d-block");
    e.nextElementSibling.classList.add("d-none");
  } else {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
    e.nextElementSibling.classList.add("d-block");
    e.nextElementSibling.classList.remove("d-none");
  }
  return isValid;
};

const validateRepassword = () => {
  if (repasswordInput.value === passwordInput.value) {
    repasswordInput.classList.add("is-valid");
    repasswordInput.classList.remove("is-invalid");
    repasswordInput.nextElementSibling.classList.remove("d-block");
    repasswordInput.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    repasswordInput.classList.add("is-invalid");
    repasswordInput.classList.remove("is-valid");
    repasswordInput.nextElementSibling.classList.add("d-block");
    repasswordInput.nextElementSibling.classList.remove("d-none");
    return false;
  }
};

const ableBTN = () => {
  if (
    validateContactUs(nameInput) &&
    validateContactUs(emailInput) &&
    validateContactUs(numberInput) &&
    validateContactUs(ageInput) &&
    validateContactUs(passwordInput) &&
    validateRepassword()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled");
  }
};
////////////
