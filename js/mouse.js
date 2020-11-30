let resultArea = document.querySelector(`.calculator__result-textarea`);
let editingButtons = document.querySelectorAll(`.editing-buttons__button`);
let numberButtons = document.querySelectorAll(`.number-buttons__button`);
let operationButtons = document.querySelectorAll(`.operation-buttons__button`);
let resultButton = document.querySelector(`.calculator__result-button`);

//!Editing Buttons
for(let i = 0; i < editingButtons.length; i++){
    editingButtons[i].addEventListener(`mousedown` , function(event){
        let pressedEditor = event.target.innerHTML;
        if(pressedEditor === `Clear`){
            resultArea.value = ``;
        }else{
            resultArea.value = resultArea.value.slice(0,-1);
        };
    })
};

//!Number Buttons
let firstNumber;
let secondNumber;
for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener(`mousedown` , function(event){
        let pressedNumber = event.target.innerHTML;
        if(pressedNumber === `1` || pressedNumber === `2` || pressedNumber === `3` || pressedNumber === `4` || pressedNumber === `5` || pressedNumber === `6` || pressedNumber === `7` || pressedNumber === `8` || pressedNumber === `9` || pressedNumber === `0`){
            resultArea.value = resultArea.value + pressedNumber;
        }else if(pressedNumber === `.`){
            if(resultArea.value.includes(`.`)){
                resultArea.value = resultArea.value
            }else if(resultArea.value === ``){
                resultArea.value = resultArea.value
            }else{
                resultArea.value = resultArea.value + `.`
            }
//TODO Нужно сделать через split? т.е. не ставится минус ко второму числу  
        }else if(pressedNumber === `+/-`){
            if(resultArea.value.includes(`-`)){
                resultArea.value = resultArea.value.slice(2)
                resultArea.value = resultArea.value.slice(0,1)
            }else if(resultArea.value === ``){
                resultArea.value = resultArea.value 
            }else{
                resultArea.value = `(` + `-` + resultArea.value + `)`
            }
        };
        firstNumber = parseFloat(resultArea.value)
  
        if(resultArea.value.includes(`+`)){
            secondNumber = parseFloat(resultArea.value.split(`+`)[1])
        }else if(resultArea.value.includes(`−`)){
            secondNumber = parseFloat(resultArea.value.split(`−`)[1])
        }else if (resultArea.value.includes(`*`)){
            secondNumber = parseFloat(resultArea.value.split(`*`)[1])
        }else if(resultArea.value.includes(`/`)){
            secondNumber = parseFloat(resultArea.value.split(`/`)[1])
        }else if(resultArea.value.includes(`^`)){
            secondNumber = parseFloat(resultArea.value.split(`^`)[1])
        }else if(resultArea.value.includes(`√`)){
            secondNumber = parseFloat(resultArea.value.split(`√`)[1])
        }

    })
};

//!OperationButtons
let chosenOperator;
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener(`mousedown` , function(event){
        let pressedOperator = event.target.innerHTML;
        if(pressedOperator === `+` || pressedOperator === `−` || pressedOperator === `*` || pressedOperator === `/` || pressedOperator === `^` || pressedOperator === `√`){
            if(resultArea.value === ``){
                resultArea.value = resultArea.value;
            }else{
                if(resultArea.value.slice(-1) === `1` || resultArea.value.slice(-1) === `2` || resultArea.value.slice(-1) === `3` || resultArea.value.slice(-1) === `4` || resultArea.value.slice(-1) === `5` || resultArea.value.slice(-1) === `6` || resultArea.value.slice(-1) === `7` || resultArea.value.slice(-1) === `8` || resultArea.value.slice(-1) === `9` || resultArea.value.slice(-1) === `0`){
                    if(resultArea.value.includes(`+`) || resultArea.value.includes(`−`) || resultArea.value.includes(`*`) || resultArea.value.includes(`/`) || resultArea.value.includes(`^`) || resultArea.value.includes(`√`)){
                        resultArea.value = resultArea.value
                    }else{
                        resultArea.value = resultArea.value + pressedOperator
                    }
                }
            }
            chosenOperator = pressedOperator;
        }
    })
    
}

//!resultButton
let finalResult;
resultButton.addEventListener(`mousedown` , function(){
    if(chosenOperator === `+`){
        finalResult = firstNumber + secondNumber;
    }else if(chosenOperator === `−`){
        finalResult = firstNumber - secondNumber;
    }else if(chosenOperator === `*`){
        finalResult = firstNumber * secondNumber;
    }else if(chosenOperator === `/`){
        finalResult = firstNumber / secondNumber;
    }else if(chosenOperator === `^`){
        finalResult = firstNumber ** secondNumber;
    }else if(chosenOperator === `√`){
        finalResult = firstNumber **(1/secondNumber);
    }
    resultArea.value = finalResult.toFixed(2)
});

//TODO Добавить переключатель количества знаков после запятой
//TODO Добавить весь тот же функционал с клавиатуры