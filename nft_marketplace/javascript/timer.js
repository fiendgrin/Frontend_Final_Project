const hour = document.querySelector("#nftInfo .hours h3");
const minute = document.querySelector("#nftInfo .minutes h3");
const second = document.querySelector("#nftInfo .seconds h3");

let myTimer = setInterval(countdown, 1000);

function countdown() {
  second.innerHTML = (parseInt(second.innerHTML) - 1).toString();
  if (
    hour.innerHTML === "0" &&
    minute.innerHTML === "0" &&
    second.innerHTML === "0"
  ) {
    clearInterval(myTimer);
  } else if (second.innerHTML == "-1") {
    second.innerHTML = "59";
    minute.innerHTML = (parseInt(minute.innerHTML) - 1).toString();
    if (minute.innerHTML == "-1") {
      minute.innerHTML = "59";
      hour.innerHTML = (parseInt(hour.innerHTML) - 1).toString();
    }
  }
  if (hour.innerHTML.length == 1) {
    hour.innerHTML = "0" + hour.innerHTML;
  }
  if (minute.innerHTML.length == 1) {
    minute.innerHTML = "0" + minute.innerHTML;
  }
  if (second.innerHTML.length == 1) {
    second.innerHTML = "0" + second.innerHTML;
  }
}
