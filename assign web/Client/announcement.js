let api = "http://localhost:8000/api/announcement";

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    let obj = JSON.parse(data);

    let array = Object.values(obj);
   
   
    for (let i = 0; i < p.length; i++) {
      p[i].innerText = array[i];
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
