const form = document.querySelector("form");
const passwordIcon = document.querySelector(".eye");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

const email = document.querySelector("email");
const password = document.querySelector("password");

passwordIcon.addEventListener("click", () => {
  let check = passwordInput.type == "password";

  if (check) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
