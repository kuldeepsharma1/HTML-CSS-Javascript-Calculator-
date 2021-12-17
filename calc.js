let screens = document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X'){
            buttonText = '*'
            screenValue +=buttonText;
            screens.value=screenValue;
            // This block is used for print the * in input box
        }
        else if (buttonText == 'C'){
                screenValue="";
                screens.value=screenValue;
        }
        else if (buttonText == '='){
            screens.value= eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screens.value =screenValue;
        }







    })
}
