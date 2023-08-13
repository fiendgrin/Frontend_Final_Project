const sendMailbtns = document.querySelectorAll(
  "#subscribeWidget .emailBtn,footer .emailBtn"
);
const toastBox = document.querySelector("#toastBox");
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

sendMailbtns.forEach((sendMail) => {
  sendMail.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = toastMaker(
      emailValidator(sendMail.previousElementSibling.value.trim())
    );
    toastBox.appendChild(newDiv);
    setTimeout(() => {
      toastBox.firstElementChild.remove();
    }, 2000);
  });
});

function toastMaker(isValid) {
  if (isValid) {
    return `<div class="success animated">
      <div class="imageBox">
        <img src="./icons/email/envelopeCheck.svg" alt="" />
      </div>
      Successfull subscription
    </div>`;
  } else {
    return `<div class="invalid animated">
        <div class="imageBox"><img src="./icons/email/xmark.svg" alt="" /></div>
        Invalid e-mail address
      </div>`;
  }
}

function emailValidator(text) {
  return regexEmail.test(text);
}
