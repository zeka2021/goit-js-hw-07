

const input = document.querySelector(".name-input");
const nameOutput = document.querySelector(".name-output > span");

 input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameOutput.textContent = event.currentTarget.value;
}