//==================================================
function submitForm() {
  const name = document.getElementById("name");
  console.log("Name: " + name.value);

  const email = document.getElementById("email");
  console.log("Email: " + email.value);

  const message = document.getElementById("message");
  console.log("Comment:  " + email.value);
}
//==================================================

const header = document.querySelector("h1");
header.style.textAlign = "center";
const formBody = document.querySelector("form");
formBody.style.borderStyle = "solid";
formBody.style.borderRadius = "10px";
formBody.style.borderColor = "gray";
formBody.style.padding = "10px";
formBody.style.margin = "25px auto auto";
formBody.style.width = "410px";

const formElement = document.querySelectorAll(".form-element");
for (let i = 0; i < formElement.length; i++) {
  formElement[i].style.fontWeight = "bold";
  formElement[i].style.display = "inline-block";
  formElement[i].style.width = "100px";
  formElement[i].style.textAlign = "center";
  formElement[i].style.paddingTop = "20px";
  formElement[i].style.paddingBottom = "20px";
}
const input = document.querySelectorAll("input");
for (let i = 0; i < input.length; i++) {
  input[i].style.paddingRight = "125px";
  input[i].style.borderStyle = "solid";
  input[i].style.borderColor = "gray";
  input[i].style.borderWidth = "1px";
}
