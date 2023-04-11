const elEmailInput = document.querySelector(".input");
const elForm = document.querySelector(".form");
const elError = document.querySelector(".show-error");
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!isValidEmail(elEmailInput.value)) {
    elError.textContent = "Error, please check your email";
  }
});
elError.textContent = "";
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
