// const form = document.getElementById("form");
// const userName = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// // Show input Error message
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }

// // Show input success message
// const showSuccess = function (input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// };
// // Check if the email Valid
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (userName.value === "") {
//     showError(userName, "User Name is Required");
//   } else {
//     showSuccess(userName);
//   }

//   if (email.value === "") {
//     showError(email, "Email is Required");
//   } else if (!validateEmail(email.value)) {
//     showError(email, "Email is not Valid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is Required");
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === "") {
//     showError(password2, "Password 2 is Required");
//   } else if (password.value !== password2.value) {
//     showError(password2, "Password 2  is not Confirmed");
//   } else {
//     showSuccess(password2);
//   }
// });
