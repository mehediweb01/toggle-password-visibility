// const logIn = document.getElementById("logIn");
const password = document.getElementById("pass");
const showPasswordIcon = document.getElementById("showPasswordIcon");
showPasswordIcon.style.cursor = "pointer";
showPasswordIcon.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.type === "password") {
    password.setAttribute("type", "text");
    showPasswordIcon.src = "images/show-password.png";
  } else {
    password.setAttribute("type", "password");
    showPasswordIcon.src = "images/hide-password.png";
  }
});
