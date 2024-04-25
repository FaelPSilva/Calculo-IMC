var showButton = document.getElementById("calculator") 
var resultContainer = document.querySelector(".result-container")
var inputBTN = document.querySelector(".input")
var formBTN = document.querySelector("imcForm")
function calculate (){

    event.preventDefault();
           
    var weight = document.getElementById("weight").value; //varivel peso
    var height = document.getElementById("height").value; // variavel altura
    console.log(weight);
    console.log(height);

    if (weight.trim() === '' || height.trim() === '') {
        alert("Por favor, preencha todos os campos de entrada.");
        return;}

    var imc = weight / (height **2); //calculo

    var resultIMC = document.getElementById("resultIMC") //referencia para a tag html
    var imcSituationText = document.getElementById("imcSituationText")
   
   
    

    if (imc<18.5){
        imcSituationText.textContent = " Você está abaixo do peso"
        imcSituationText.className = "low"
    } else if(imc<24.9){
        imcSituationText.textContent = " Peso Ideal"
        imcSituationText.className = "good"
    } else if(imc<29.9){
       imcSituationText.textContent = " Sobre Peso"
       imcSituationText.className = "regular"
    } else if(imc<34.9){
        imcSituationText.textContent = " Obesidade"
        imcSituationText.className = "madium"
    } else if(imc<39.9){
        imcSituationText.textContent = " Obesidade Morbida"
        imcSituationText.className = "bad"
    } else {
       imcSituationText.textContent = " Obesidade Grau III"
       imcSituationText.className = "veryBad"
    }

    resultIMC.textContent = imc.toFixed(2); //limita a quantidade de caracteres
} 
   
    showButton.addEventListener("click", function(event) {
       //exibe a div com class container-result

        resultContainer.style.display = "flex";
        inputBTN.style.display = "none"

        event.preventDefault()
    }); 

    formBTN.addEventListener("click", function(event) {
        //exibe a div com class container-result
 
       event.preventDefault()

       
 
     });

     

    

   
    

    
   
