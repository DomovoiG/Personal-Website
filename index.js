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
