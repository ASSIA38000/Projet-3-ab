const email="a@gmail.com";
const password="p";

let randNumber = Math.round(Math.random() * 10);
let displayNumber = document.getElementById("displayNumber");
displayNumber.innerHTML = randNumber;
console.log (randNumber);

function  cnxn(){

    let emailInput = document.getElementById("mail").value
    console.log (emailInput);
    
    let passwordInput = document.getElementById("pw").value
    console.log (passwordInput);
    
    let numberInput = document.getElementById("nombre").value
    console.log (numberInput);
        
    if (emailInput === "" || passwordInput === "" || numberInput === ""){
    
        console.log("Remplir tous les champs");
        document.getElementById("erreur").innerHTML = `
        <p class="erreur">Merci de remplir tous les champs</p>

        `

    } else{
        
        if(emailInput === email && passwordInput === password && numberInput == randNumber){
            
           console.log("vous etes connecté");

            setTimeout(redirect, 3000)

            document.getElementById("form-connexion").style.display = "none"

            document.getElementById("loader").classList.add("loader")
           function redirect(){
            window.location = "accueil.html";
           }

        }else{
            document.getElementById("erreur").innerHTML = `
            <p class="erreur">Merci de vérifier vos identifiants de connexion</p>
            
            `
            document.getElementsByTagName(emailInput, passwordInput, numberInput).style.display = "none"
        }
    
    }

}

