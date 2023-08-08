const burger = document.querySelector(".burger");
const sideBar = document.querySelector(".sideBar");
const rightNav = document.querySelector(".right");
sideBar.innerHTML = rightNav.innerHTML;

burger.addEventListener("click", () => {
  if (sideBar.style.bottom != "-167.17px") {
    sideBar.style.bottom = "-167.17px";
  } else {
    sideBar.style.bottom = "0px";
  }
});
