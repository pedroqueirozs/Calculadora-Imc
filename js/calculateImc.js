import { modal } from "./modal.js";
import "./keyboardFeatures.js";
const campoName = document.querySelector(".nameInput");
const weightInput = document.querySelector(".weightInput");
const heightInput = document.querySelector(".heightInput");

export default function calculateImc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  modal.modalError.textContent = "Preencha todos os campos";

  if (name !== "" && height !== "" && weight !== "") {
    modal.modalErrorClose();
    modal.close();
    const valorIMC = (weight / (height / 100) ** 2).toFixed(2);
    let classificacao = "";
    classificacao = " abaixo do peso ";
    if (valorIMC < 18.5) {
      classificacao = " abaixo do peso ";
    } else if (valorIMC < 25) {
      classificacao = "com o peso ideal .Parabéns! ";
    } else if (valorIMC < 30) {
      classificacao = " levemente acima do peso ";
    } else if (valorIMC < 35) {
      classificacao = " com obesidade grau I ";
    } else if (valorIMC < 40) {
      classificacao = " com obesidade grau II ";
    } else {
      classificacao = "com obesidade grau III . Cuidado!!!";
    }
    modal.open();
    modal.modalText.innerHTML = `${name} seu IMC é ${valorIMC} e você esta ${classificacao}`;
  } else {
    modal.modalErrorOpen();
  }
}

campoName.oninput = () => {
  modal.modalErrorClose();
};
weightInput.oninput = () => {
  modal.modalErrorClose();
};
heightInput.oninput = () => {
  modal.modalErrorClose();
};
