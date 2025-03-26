import "./src/styles/main.scss"


import { Header } from "./src/components/Header/Header";
import { Gallery } from "./src/components/Gallery/Gallery";
 

const app = document.querySelector("#app");

const header = Header();
const gallery = Gallery();
app.append(header, gallery);    

