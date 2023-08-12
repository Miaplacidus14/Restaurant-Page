import {brasserie, cafe, the, compte, panier} from './header.js';
import name from './restaurantName.js';
import {accueil, cartes, animations, contact, boutique} from "./secondHeader.js";
import text from "./content.js";

function componentAccueil() {
    const header = document.createElement('header');
    const right = document.createElement('div');
    const left = document.createElement('div');

    header.appendChild(right);
    header.appendChild(left);

    right.classList.add('right');
    left.classList.add('left');

    const firstList = document.createElement('ul');
    const secondList = document.createElement('ul');

    right.appendChild(firstList);
    left.appendChild(secondList);

    const firstli = document.createElement('li');
    const secondli = document.createElement('li');
    const thirdli = document.createElement('li');

    firstli.textContent = brasserie;
    secondli.textContent = cafe;
    thirdli.textContent = the;

    firstList.appendChild(firstli);
    firstList.appendChild(secondli);
    firstList.appendChild(thirdli);

    const fourthli = document.createElement('li');
    const fifthli = document.createElement('li');

    secondList.appendChild(fourthli);
    secondList.appendChild(fifthli);

    fourthli.textContent = compte;
    fifthli.textContent = panier;

    const restaurantName = document.createElement('div');

    restaurantName.classList.add('restaurant-name');

    const title = document.createElement('h1');
    title.textContent = name;

    restaurantName.appendChild(title);

    const secondHeader = document.createElement('div');

    secondHeader.classList.add('second-header');

    const list = document.createElement('ul');
    secondHeader.appendChild(list);

    const oneli = document.createElement('li')
    const twoli = document.createElement('li')
    const threeli = document.createElement('li')
    const fourli = document.createElement('li')
    const fiveli = document.createElement('li')

    list.appendChild(oneli);
    list.appendChild(twoli);
    list.appendChild(threeli);
    list.appendChild(fourli);
    list.appendChild(fiveli);

    oneli.textContent = accueil;
    twoli.textContent = cartes;
    threeli.textContent = animations;
    fourli.textContent = contact;
    fiveli.textContent = boutique;

    oneli.onclick = function () {contentAccueil()}
    twoli.onclick = function () {contentCartes()}
    fourli.onclick = function () {contentContact()}

    const content = document.createElement('div');
    content.classList.add('content');

    const paragraph = document.createElement('p');
    content.appendChild(paragraph);
    paragraph.textContent = text;

    document.body.appendChild(header);
    document.body.appendChild(restaurantName);
    document.body.appendChild(secondHeader);
    document.body.appendChild(content);
}

componentAccueil();

function contentCartes () {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = "Les cartes ne sont pas encore disponibles";
}

function contentContact () {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = "Les contacts ne sont pas encore disponibles";
}

function contentAccueil () {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    
    const paragraph = document.createElement('p');
    content.appendChild(paragraph);
    paragraph.textContent = text;
}
