import {livres} from './livres.js';
import Livre from './Livre.js';

export default class Librairie
{

    constructor(el)
    {

        this._el =  el;
        this._elsFiltre = this._el.querySelectorAll('[data-js-filter]');
        this._elLivres = document.querySelector('[data-js-livres]');
        this.init();
 
    }

    init()
    {
        this.afficherChargementPage();

        for (let i = 0 ; i < this._elsFiltre.length ; i++) {
            
            this._elsFiltre[i].addEventListener('click',function (e) {
                e.preventDefault;
                let filter = e.target.dataset.jsFilter;
                this.afficherLivres(filter);
                
            }.bind(this))
        }               
    }

    /**
     * Fonction d'affichage et injection des 12 premiers livres au chargement de la page
     */

    afficherChargementPage()
    {
        this._elLivres.innerHTML = "";

        for (let i= 0; i< 12; i++) {
            this.injecterDom(i);
            
        }
    }

    /**
     * Fontion d'affiche des livres selon le filtre choisi
     * Fait aussi appel à injecterDom pour injecter le livre 
     * @param {*} filter 
     */


    afficherLivres(filter)
    {
        
        this._elLivres.innerHTML = "";

        for (let i = 0; i < livres.length; i++) 
        {
            if( filter == "Nouveautés" && livres[i].nouveaute)
            {     
                this.injecterDom(i);                      
            } 
            else if (filter == "Tous") 
            {
                this.injecterDom(i);            
            }
            else     
            {
                if (filter == livres[i].categorie) 
                {
                    this.injecterDom(i);                        
                }      
            }     
        }
    }

    /**
    * 
    * Fonction d'injection du livre dans le dom 
    * @param {*} Dom 
    * @param {*} i 
    * @returns Dom
    */
 
    injecterDom(i) 
    {
        let dom = ` <div class="carte" data-js-position= ${i}>
                        <img src="${livres[i].image}" alt="${livres[i].titre}">
                        <div>
                            <p>${livres[i].titre}</p>
                            <p><b>${livres[i].prix} $</b></p>
                            <button>Ajouter</button>
                        </div>
                    </div>`;
         this._elLivres.insertAdjacentHTML('beforeend', dom);
         new Livre(this._elLivres.lastElementChild);
         
    }
}

