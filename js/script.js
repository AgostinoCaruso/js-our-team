/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
*Bonus*
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
*/

import { teamMembers } from "./db.js"

//todo
//load all card and display
//add a form to add new members

//div HTML
const containerCard = document.getElementById("container-card");

StartApp();

function StartApp() {
    //const fragment = document.createDocumentFragment();
    const template = teamMembers.map(element => `
        <div class="col-4 p-2">
            <div class= "myCard d-flex flex-row" >
                <div class = "card-img">
                    <img class="card-img-top" src="${element.img}" alt="${element.name}">
                </div>
                <div class="card-body card-text d-flex flex-column justify-content-start p-4">
                    <h5 class="cardName">${element.name}</h5>
                    <p class="cardRole">${element.role}</p>
                    <a href="#" class="cardEmail">${element.email}</a>

                </div>
            </div>
        </div>
    `).join("");
    //containerCard.appendChild(fragment);
    containerCard.innerHTML = template;
}






























//#region Element
        // //div
        // const card = document.createElement("div");
        // card.className = "myCard col-4 d-flex justify-content-between flex-row align-items-center";

        // const cardImg = document.createElement("div");
        // cardImg.className = "card-img";

        // const cardText = document.createElement("div");
        // cardText.className = "card-text";

        // //ele in div
        // const name = document.createElement("p");
        // const role = document.createElement("p");
        // const email = document.createElement("p");

        // const img = document.createElement("img");

        // name.innerHTML = element.name;
        // role.innerHTML = element.role;
        // email.innerHTML = element.email;
        // img.src = element.img;

        // //add ele to HTML
        // cardText.appendChild(name);
        // cardText.appendChild(role);
        // cardText.appendChild(email);

        // cardImg.appendChild(img);

        // card.appendChild(cardImg);
        // card.appendChild(cardText);

        // fragment.appendChild(card);  
        // console.log({fragment});
        //#endregion