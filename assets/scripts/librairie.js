import {livres} from './livres.js';
import Livre from './livre.js';

 export default class Librairie{

    constructor(el){

        this._el =  el;
        this._filtre = this._el.innerHTML;
        this.elDetail = document.querySelector('[data-js-detail]');  
        this.init();
 
    }


    init()
    {
        let Dom ="";
        this.elDetail.innerHTML = "";

       /*  this.elDetail.addEventListener("load",function(){
            for (let i = 0; i < 12; i++) {
                Dom =` <div class="carte" data-js-pos= ${i}>
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
        
        });
 */

        if( this._filtre == "Nouveautés")
        {
            for (let i = 0; i < livres.length; i++) {
                if (livres[i].nouveaute) {
                    Dom = this.afficherDom(Dom, i);                   
                }       
           }      
        } 
        else if (this._filtre == "Tous") 
        {
            for (let i = 0; i < livres.length; i++) {
                Dom = this.afficherDom(Dom, i); 
            }        
        }
        else     
        {
            for (let i = 0; i < livres.length; i++) {
                if (this._filtre == livres[i].categorie) {
                    Dom =this.afficherDom(Dom, i);             
                }       
           }      
        } 
                   
    } 
    /**
     * 
     * Fonction d'affichage des livres dans le dom 
     * @param {*} Dom 
     * @param {*} i 
     * @returns Dom
     */
 
     afficherDom(Dom, i) {
         Dom = ` <div class="carte" data-js-pos= ${i}>
                    <img src="${livres[i].image}">
                    <p>${livres[i].titre}</p>
                    <p><b>${livres[i].prix}</b></p>
                    <button>Ajouter</button>
                    </div>`;
         this.elDetail.insertAdjacentHTML('beforeend', Dom);
         return Dom;
     }
}

/* Where you are right now doesnt have to determine where you're end up.
No one is written your destiny for you because here on earth, you write your own destiny, you make your own future.That why you have to set up high goals for your education and do everthing you can to meet them. B
ut whatever you resolve to do, COMMIT  to it , WORK  at it. Sometimes you get that sense from tv or social media that you can be rich without any hard work by playing any major sport or being on reality's show TV, chances are ; you are not gonna be it .The thuth is:"beeing SUCESSFULL"  is HARD. You wont succeed at things the first time you try but Keep tryin and results will come... */
