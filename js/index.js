// IMPORTAÇÕES
import { modal } from "./modal.js";
import calculateImc from "./calculateImc.js";
import resetFields from "./resetFields.js";
// BOTÃO
const calcular = document.getElementById("calcular");
// EVENTOS
calcular.addEventListener("click", calculateImc);
modal.buttonClose.addEventListener("click", resetFields);
