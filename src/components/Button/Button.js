export const Button = ({text, func}) => {
const button = document.createElement("button");

button.classList.add("primary-button");
button.textContent = text;
button.addEventListener("click", func);

return button

}