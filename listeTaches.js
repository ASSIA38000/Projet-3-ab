
//Fonction declenchée au CLIC SUR LE BOUTON "Ajouter la tâche"

function nouvelleTache(){

    //récupérer la liste HTML <ul>
    let listeParent = document.getElementById("taches-liste");

    //Créer un noeud élément <li>
    let li = document.createElement('li');
    li.className = "liste-element";

    //Recuperer la valeur du champ input entré par l'utilisateur
    let inputValue = document.getElementById("input-ajouter-tache").value;

    //Debug du champ input
    console.log(inputValue);

    //Crée un noeud de type texte et Transforme la valeur du champ input en texte
    let liNode = document.createTextNode(inputValue);

    //Ajouter le champ text a <li>
    li.appendChild(liNode);

    //Verifier que le champ n'est pas vide
    if(inputValue === ""){
        alert('Merci de saisir une tâche')
    }else{
        listeParent.appendChild(li)
    }

// VIDER LE CHAMP après avoir validé
    document.getElementById("input-ajouter-tache").value = "";

    //ajouter le BOUTON SUPPRIMER a chaque <li>

    //Ajout d'une balise span a chaque <li>
    let span = document.createElement('span');

    //Dans chaque span on ajoute un noeurd texte avec une CROIX = X
    let croix = document.createTextNode('SUPPRIMER');

    //On ajoute un attribut class="" a chaque <span>
    
    //On ajoute le noeud texte a la span
    span.appendChild(croix);
    span.className = "supprimer";

    //on ajoute chaque span a <li>
    li.appendChild(span);


//SUPPRIMER DES ELEMENTS

    //Recuper les elements span qui on la classe supprimer ['supprimer']
    let btnSupprimer = document.getElementsByClassName("supprimer");

    //Boucle de parcours de toutes les span qui on la classe supprimer <span class="supprimer">
    let i;

    //3 paramètres i = 0; i est < a la longueur du tableau <span class="supprimer"; i += 1
   
    for(i = 0; i < btnSupprimer.length; i++){

        //Au clic sur chaque span = on declenche une fonction anonyme

        btnSupprimer[i].onclick = function (){

            //let spanParentLI = btnSupprimer[i].parentElement;
            //On recupere les <li> parent de <span class="supprimer">
            let spanParentLI = this.parentElement;
            spanParentLI.style.display = "none";
        }
    }
}
//BARRER LA TACHE

function barrerTache(){

    //Recuperer la liste parente <ul> par son id
    let listeUL = document.getElementById("taches-liste");

    //test de debug
    console.log(listeUL);

    //on decleche un click grace a la methode addEventListener("type d'evenement", fonction anonyme auto appelée)

    //En es6  listeUL.addEventListener("click", (event) =>{

    //La fonction fléchée remplace function(event)

    listeUL.addEventListener("click", function (event){

        //Si dans <ul> il y a une balise <li>
        if(event.target.tagName === "LI"){

            //alert("test")
            //On ajoute et retire la classe check a <li class="liste-taches checked">
            event.target.classList.toggle('checked');
        }
    })
}

barrerTache();















