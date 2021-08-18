function lengthChecker(){
    const randomNumbers = Math.round(Math.random()*10000);
    const generatedNumbers = randomNumbers + '';
    if(generatedNumbers.length == 4){
        console.log(randomNumbers)
        return generatedNumbers;
    }
    else{
        console.log('number is not equal to 4',generatedNumbers);
        return lengthChecker();
    }
}
function generatePin(){
    const number = lengthChecker();
    document.getElementById('displayValue').value = number;
}

document.getElementById('input-button').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('input-display');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        const previousCalc = calc.value;
        calc.value = previousCalc + number;
    }
    
});

function submit(){
    //debugger;
    const randomNumber = document.getElementById('displayValue').value;
    const myNumber = document.getElementById('input-display').value;

    const text = document.getElementById('success');
    const message = document.getElementById('fail');
    if(randomNumber == myNumber){
        text.style.display = 'block';
        message.style.display = 'none';
    }
    else{
        message.style.display = 'block';
        text.style.display = 'none';
    }
}