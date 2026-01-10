const hamburger = document.getElementById("hamburger");
const navContents = document.querySelector(".nav-contents");

hamburger.addEventListener("click", () => {
  navContents.classList.toggle("active");
});
