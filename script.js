function calculateIMC(){
    weight=parseFloat(document.getElementById('weight').value);
    height=parseFloat(document.getElementById('height').value)/100;

    if(isNaN(height) || isNaN(weight) || height<0 || weight<0){
        alert('Insert valid number please');
        
        return;
    }
    
    let imc= weight/(Math.pow(height,2));
    alert('Your IMC is '+imc.toFixed(2));
    console.log("All is right");

}

