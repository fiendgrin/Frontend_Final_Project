const form = document.querySelector("#imagePlaceholder form");
console.log(form);
const notValidText = document.querySelectorAll(
  "#imagePlaceholder form .box >p"
);
const regexPass =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

console.log(regexEmail);
console.log(notValidText);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  notValidText.forEach((text) => {
    text.style.display = "none";
  });
  if (form.children[0].firstElementChild.value.length < 3) {
    notValidText[0].style.display = "initial";
    return;
  }
  if (!emailValidator(form.children[1].firstElementChild.value)) {
    notValidText[1].style.display = "initial";
    return;
  }
  if (!passwordValidator(form.children[2].firstElementChild.value)) {
    notValidText[2].style.display = "initial";
    return;
  }
  if (
    form.children[2].firstElementChild.value !=
    form.children[3].firstElementChild.value
  ) {
    notValidText[3].style.display = "initial";
    return;
  }
  form.reset();
});


function passwordValidator(text) {
  return regexPass.test(text);
}
