/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
*Bonus*
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
*/

import {teamMembers} from "./db.js"

//todo
//load all card and display
//add a form to add new members

//div HTML
const conainerCard = document.getElementById("container-card");



function StartApp(){
    const fragment = document.createDocumentFragment();
    
    teamMembers.forEach(element => {
        //div
        const card = document.createElement("div");
        card.className("card","col-4","d-flex");
        
        const cardImg = document.createElement("div");
        cardImg.className("card-img");
        
        const cardText = document.createElement("div");
        cardText.className("card-text");
        
        //ele in div
        const img = document.createElement("img");
        img.setAttribute("alt", "");
        
        const name = document.createElement("p");
        const role = document.createElement("p");
        const email = document.createElement("p");

        name.innerHTML = element.name;
    });
}

// <div class="card col-12 col-md-4"></div>
