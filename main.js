import ImprimeEstudo from "./utils.js"
import { elogiar } from "./utils.js"

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    ImprimeEstudo("Vamos estudar");
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    elogiar("Parabens")
});