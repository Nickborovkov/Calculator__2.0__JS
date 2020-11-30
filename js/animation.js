let allButtonsArray = document.querySelectorAll(`.button__animation`);

for(let i = 0; i < allButtonsArray.length; i++){
    allButtonsArray[i].addEventListener(`mousedown` , function(){
        allButtonsArray[i].classList.add(`buttonPressAnimation`);
        allButtonsArray[i].addEventListener(`mouseup` , function(){
            allButtonsArray[i].classList.remove(`buttonPressAnimation`);
        })
        allButtonsArray[i].addEventListener(`mouseout` , function(){
            allButtonsArray[i].classList.remove(`buttonPressAnimation`);
        })
    })
}