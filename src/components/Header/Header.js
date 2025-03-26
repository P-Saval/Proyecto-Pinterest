
import { displayPhotos } from "../Card/Card";
import { Button } from "../Button/Button";


export const Header = () => {
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = "https://icons.iconarchive.com/icons/xenatt/the-circle/256/App-Pinterest-icon.png";
    logo.addEventListener("click", ()=>{
        window.location.pathname = "/";
    })

    const divButtons = document.createElement("div");
    divButtons.classList.add("divButtons");

    const input = document.createElement("input");
    input.type = "search";
    input.classList.add("search");
    input.placeholder = "Buscar...";
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
        const query = event.target.value;
        event.target.value = " ";
          displayPhotos(query);} 
        else {
            document.querySelector(".gallery").innerHTML = ''}
        })
     
    const divIcons = document.createElement("div");
    divIcons.classList.add("divIcons");
    const bellIcon = document.createElement("i");
    bellIcon.classList.add("bellIcon");
    const chatIcon = document.createElement("i");
    chatIcon.classList.add("chatIcon");
    const userIcon = document.createElement("i");
    userIcon.classList.add("userIcon");
    divIcons.append(bellIcon,chatIcon)
    
    divButtons.append(Button({text: "Inicio"}),Button({text: 'Explorar'}), Button({text: 'Crear'}))
    header.append(logo, divButtons, input, divIcons,userIcon);

    return header;

}



