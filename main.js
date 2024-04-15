// Red invalid border fix before user input
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.add("error");
    },
    false
  );
});