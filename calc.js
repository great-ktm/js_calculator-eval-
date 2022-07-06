
console.log('hello world')
let display = document.getElementById('display');
let NumberData=Array.from(document.getElementsByClassName('data-number'));


NumberData.map(button =>{
 button.addEventListener('click', (e) =>{

        switch(e.target.innerText){
            case 'CA':
                display.innerText='';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }

});
});