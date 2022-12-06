import Librairie from './librairie.js';
import { livres } from "./livres.js";
(function () {

    let elsP = document.querySelectorAll('[data-js-filter]'),
    elDetail = document.querySelector('[data-js-detail]');

    /**
     * Au chargement de la page, affichage des 12 premiers livres .
     */
 
    for (let i = 0; i < 12; i++) {
        let Dom =` <div class="carte" data-js-pos= ${i}>
        <img src="${livres[i].image}">
        <p>${livres[i].titre}</p>
        <footer>
        <p><b>${livres[i].prix}$</b></p>
        <button>Ajouter</button>
        </footer>
        </div>`;

        elDetail.insertAdjacentHTML('beforeend', Dom) ;
        //new Livre(livres[i])   
    } 


    for (let i= 0; i < elsP.length; i++) {

        elsP[i].addEventListener('click',function (e) {
            e.preventDefault
            new Librairie(elsP[i]);          
        });    
    }    
})();

