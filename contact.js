//==================================================
function submitForm() {
  const name = document.getElementById("name");
  console.log("Name: " + name.value);

  const email = document.getElementById("email");
  console.log("Email: " + email.value);

  const message = document.getElementById("message");
  console.log("Message: " + email.value);
}
//==================================================
const contactPage = document.querySelector(".contact");
contactPage.style.marginRight = "auto";
contactPage.style.marginLeft = "auto";
contactPage.style.marginTop = "200px";
contactPage.style.width = "50%";
contactPage.style.backgroundColor = "rgb(20, 14, 39)";
contactPage.style.paddingLeft = "100px";
contactPage.style.paddingRight = "100px";
contactPage.style.paddingTop = "30px";
contactPage.style.paddingBottom = "100px";

const form = document.querySelector("form");
form.style.textAlign = "center";

const header = document.querySelector(".contact-header");
header.style.paddingTop = "0px";
header.style.paddingLeft = "0px";
header.style.color = "white";
header.style.textAlign = "center";

const name = document.getElementById("name");
name.style.fontFamily = "Roboto, serif";
name.style.width = "400px";
name.style.height = "25px";
name.style.alignContent = "center";

const email = document.getElementById("email");
email.style.fontFamily = "Roboto, serif";
email.style.width = "400px";
email.style.height = "25px";

const email = document.getElementById("phone-number");
email.style.fontFamily = "Roboto, serif";
email.style.width = "400px";
email.style.height = "25px";

const message = document.getElementById("message");
message.style.fontFamily = "Roboto, serif";
message.style.width = "400px";
message.style.paddingBottom = "75px";
message.style.fontSize = "10px";
