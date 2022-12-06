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
