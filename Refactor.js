const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input Error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input success message
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
// Check if the email is valid
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Check Reqired input

function checkRequired(inputArr) {
  for (const input of inputArr) {
    if (input.value.trim() === "") {
      showError(input, `${capitalFirst(input)} is required`);
    } else {
      showSuccess(input);
    }
  }
}

// Capital first letter
function capitalFirst(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);
});
