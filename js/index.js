// IMPORTAÇÕES
import { modal } from "./modal.js";
import imc from "./imc.js";
import reset from "./reset.js";
// BOTÃO
const calcular = document.getElementById("calcular");
// EVENTOS
calcular.addEventListener("click", imc);
modal.buttonClose.addEventListener("click", reset);
