function submitForm() {
  console.log("========= Form Submission =========");
  const username = document.getElementById("name");
  console.log("  name: " + username.value);

  const email = document.getElementById("email");
  console.log("  email: " + email.value);

  const password = document.getElementById("subject");
  console.log("  subject: " + password.value);

  const date = document.getElementById("comment");
  console.log("  Comment: " + date.value);
}

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
  formElement[i].style.textAlign = "left";
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

const buttonHolder = document.querySelector(".btn-holder");
buttonHolder.style.display = "flex";
buttonHolder.style.paddingLeft = "30px";
buttonHolder.style.paddingTop = "10px";

const buttonPrimary = document.querySelector(".btn-primary");
buttonPrimary.style.backgroundColor = "green";
buttonPrimary.style.color = "white";
buttonPrimary.style.borderRadius = "2px";
buttonPrimary.style.borderStyle = "solid";
buttonPrimary.style.borderWidth = "1px";
buttonPrimary.style.borderColor = "green";
buttonPrimary.style.padding = "3px 45px 3px 45px";
buttonPrimary.style.marginLeft = "20px";

const buttonSecondary = document.querySelector(".btn-secondary");
buttonSecondary.style.color = "green";
buttonSecondary.style.borderStyle = "solid";
buttonSecondary.style.borderRadius = "5px";
buttonSecondary.style.borderColor = "green";
buttonSecondary.style.borderWidth = "1px";
buttonSecondary.style.padding = "3px 55px 0px 55px";
buttonSecondary.style.marginLeft = "10px";
