let Input = document.getElementById("email");
let Password = document.getElementById("psw");
let confirmPassword = document.getElementById("psw-repeat");
let container = document.getElementById("container");

let registerAPI = "http://localhost:8000/api/register";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (Password.value !== confirmPassword.value) {
    document.getElementById("psw-repeat").innerText = "Not match to password";
  } else {
    let Information = {
      username: Input.value.trim(),
      password: Password.value.trim(),
    };

    fetch(registerAPI, {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Information),
    })
      .then((res) => {
        return res.json();
      })
      .then((a) => {
        let user = a;
        console.log(user);
        if (userInput.value == user.userName) {
          document.getElementById("alertUserName").innerText = user.errUser;
        }
        if (userPassword.value == "") {
          document.getElementById("alertPassword").innerText = user.errPassword;
        }

        if (user.message == "success") {
          alert("Successful.Move to Login page ");
          window.location.href = "login.html";
        }
        Input.value = "";
        Password.value = "";
        confirmPassword.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

let Icon = document.querySelector("");
let Container = document.querySelector("");
let Logout = document.querySelector("");
console.log(Icon);
console.log(document.cookie);
if (document.cookie) {
  userIcon.style.display = "none";
  let h3= document.createElement("h3");
  h1.style.fontSize = "16px";
  h1.innerText = document.cookie.split("=")[1];
  Container.appendChild(h3);

  Logout.style.display = "none";
  Container.addEventListener("click", () => {
    if (Logout.style.display == "block") {
      Logout.style.display = "none";
    } else {
      Logout.style.display = "block";
    }
  });
  Logout.addEventListener("click", () => {
    document.cookie =
      "username=; expires=Sun, 20 Dec 2022 00:00:00 UTC; path=/;";
    window.location.href = "login.html";
  });
  document.getElementById("register").removeAttribute("href");
  document.getElementById("login").removeAttribute("href");
} else {
  document.getElementById("register").href = "Register page.html";
  document.getElementById("login").href = "login.html";
  Logout.style.display = "none";
  console.log("empty");
}


function check() {}
