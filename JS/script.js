var showButton = document.getElementById("calculator") 
var formBTN = document.querySelector("imcForm")


function calculate(){

    event.preventDefault();

    
         
    var weight = document.getElementById("weight").value; //varivel peso
    var height = document.getElementById("height").value.replace(',','.'); // variavel altura adicionado um .replace para trocar a ',' por '.';
    
    
    
    if (weight.trim() == '' || height.trim() == '') {
        alert("Por favor, preencha todos os campos de entrada."); //varifica se os campos estão 
        return false;
    }

     

        var imc = weight / (height **2); //calculo
    
        var resultIMC = document.getElementById("resultIMC") //referencia para a tag html
        
        

        var imcSituationText = document.getElementById("imcSituationText") //referencia para a tag html
       
       
        document.querySelector(".result-container")
        .classList.toggle('show');

        document.querySelector(".input").style.display = "none"

        
        
    
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

    document.getElementById("limpar").addEventListener("click", function()
    {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';   
    }
    );

    document.querySelector('.enterInputWeight').addEventListener('keypress', function(event) {
       
        var keyCode = event.keyCode;
       var key = String.fromCharCode(keyCode);
        var regex = /^[0-9]+$/; // Expressão regular para permitir apenas dígitos numéricos
   
        if (!regex.test(key)) {
            event.preventDefault(); // Impede a entrada da tecla se não corresponder à expressão regular
        }

       
    });

    document.querySelector('.enterInputWeight').addEventListener('paste', (event) => {
        event.preventDefault(); // Impede a ação padrão de colar texto no campo de entrada
    });

    document.querySelector('.enterInputHeight').addEventListener('input', (event) => {
        var input = event.target.value; // Obtém o valor atual do campo de entrada
        var regex = /^[0-9.,]*$/; // Expressão regular para permitir apenas dígitos numéricos, vírgulas e pontos
    
        if (!regex.test(input)) {
            event.target.value = input.replace(/[^0-9.,]/g, ''); // Remove todos os caracteres que não são números, vírgulas ou pontos
        } else {
            if (input.length === 1 && input !== "," && /[0-9]/.test(input)) { // Verifica se há apenas um dígito e não é uma vírgula
                event.target.value = input + ","; // Adiciona uma vírgula após o primeiro dígito
            }
        }
    });
    
    document.querySelector('.enterInputHeight').addEventListener('keydown', (event) => {
        var keyCode = event.keyCode;
        if (keyCode === 8) { // Verifica se a tecla pressionada é a tecla de apagar (backspace)
            var input = event.target.value;
            if (input.length === 2 && input.endsWith(",")) { // Se há uma vírgula após o primeiro dígito, permite a remoção da vírgula
                event.target.value = input.slice(0, -1); // Remove a vírgula
                event.preventDefault(); // Impede a ação padrão da tecla de apagar (backspace)
            }
        }
    });

    

     

    

   
    

    
   
