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
const containerCard = document.getElementById("container-card");

StartApp();

function StartApp(){
    const fragment = document.createDocumentFragment();
    
    teamMembers.forEach(element => {
        //div
        const card = document.createElement("div");
        card.className = "card col-4 d-flex justify-content-between flex-row align-items-center";
        
        const cardImg = document.createElement("div");
        cardImg.className = "card-img";
        
        const cardText = document.createElement("div");
        cardText.className = "card-text";
        
        //ele in div
        const name = document.createElement("p");
        const role = document.createElement("p");
        const email = document.createElement("p");

        const img = document.createElement("img");
        
        name.innerHTML = element.name;
        role.innerHTML = element.role;
        email.innerHTML = element.email;
        img.src = element.img;

        //add ele to HTML
        cardText.appendChild(name);
        cardText.appendChild(role);
        cardText.appendChild(email);
        
        cardImg.appendChild(img);
        
        card.appendChild(cardImg);
        card.appendChild(cardText);

        fragment.appendChild(card);  
        console.log({fragment});
    });
    containerCard.appendChild(fragment);
}

// <div class="card col-12 col-md-4"></div>
