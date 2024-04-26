const navList = document.querySelector(".nav-list");

document.querySelector("#menu").onclick = () => {
  navList.classList.toggle("active");
};

const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});
