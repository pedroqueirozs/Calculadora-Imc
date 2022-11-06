const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

function imc () { 
const name = document.getElementById('name').value;
const height = document.getElementById ('height').value;
const weight = document.getElementById ('weight').value;
const result = document.getElementById ('result');

if( name !== '' && height !== '' && weight !== '' ){
    const valorIMC =(weight / (height * height)).toFixed (2);
    
    let classificacao = "";

    if (valorIMC < 18.5){
    classificacao = " abaixo do peso ";
}
else if (valorIMC < 25){
    classificacao = "com o peso ideal .Parabéns! ";

}
else if (valorIMC < 30){
    classificacao = " levemente acima do peso ";

}
else if (valorIMC < 35){
    classificacao = " com obesidade grau I ";

}
else if (valorIMC < 40){
    classificacao = " com obesidade grau II ";

}
else{
    classificacao = "com obesidade grau III . Cuidado!!!"
}

result.textContent = ` ${name} seu IMC é ${valorIMC} e você esta ${classificacao}`;
}

else {
result.textContent = "Preencha todos os campos"; 
}
}
function reset(){
document.getElementById ("name").value = "";
document.getElementById ("height").value = "";
document.getElementById ("weight").value = "";
result.textContent = "";
}
calcular.addEventListener('click' , imc);
limpar.addEventListener('click' , reset);