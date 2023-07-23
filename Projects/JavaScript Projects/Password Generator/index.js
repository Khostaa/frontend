const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let isSymbol = false

function generatePassword(){
    
    let gpass1 = document.querySelector("#pass1")
    let gpass2 = document.querySelector("#pass2")
    gpass1.textContent = ''
    gpass2.textContent = ''
    for( let i=0; i<15;i++)
    {
        let num1 = Math.floor(Math.random() * characters.length)
        gpass1.textContent += characters[num1]

        
        let num2 = Math.floor(Math.random() * characters.length)
        gpass2.textContent += characters[num2]
    }
}

function generatePasswordsym(){
    let gpass1 = document.querySelector("#pass1")
    let gpass2 = document.querySelector("#pass2")
    gpass1.textContent = ''
    gpass2.textContent = ''
    for( let i=0; i<15;i++)
    {
        let num1 = Math.floor(Math.random() * charactersSym.length)
        gpass1.textContent += charactersSym[num1]

        
        let num2 = Math.floor(Math.random() * charactersSym.length )
        gpass2.textContent += charactersSym[num2]
    }
}
function symbol(){
    isSymbol = !isSymbol;
    
}


function check()
{
    console.log(isSymbol)

    if (isSymbol === true)
    {
        generatePasswordsym()
    }
    else  {
        generatePassword()
    }
}

function retheme(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}