const burger = document.querySelector(".burger");
const sideBar = document.querySelector(".sideBar");
const rightNav = document.querySelector(".right");
sideBar.innerHTML = rightNav.innerHTML;

burger.addEventListener("click", () => {
  if (sideBar.style.bottom != "-167.17px") {
    sideBar.style.bottom = "-167.17px";
    sideBar.style.zIndex = "1";
    sideBar.style.opacity = "1";
  } else {
    sideBar.style.bottom = "-100px";
    sideBar.style.zIndex = "-1";
    sideBar.style.opacity = "0";
  }
});

sideBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

burger.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  sideBar.style.bottom = "-100px";
  sideBar.style.zIndex = "-1";
  sideBar.style.opacity = "0";
});
