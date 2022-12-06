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

        this.elDetail.addEventListener("load",function(){
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


        if( this._filtre == "Nouveautés")
        {
            for (let i = 0; i < livres.length; i++) {
                if (livres[i].nouveaute) {
                    Dom =` <div class="carte" data-js-pos= ${i}>
                    <img src="${livres[i].image}">
                    <p>${livres[i].titre}</p>
                    <p><b>${livres[i].prix}</b></p>
                    <button>Ajouter</button>
                    </div>`;
                    this.elDetail.insertAdjacentHTML('beforeend', Dom) ;    
                    console.log(this.elDetail);        
                }       
           }      
        } 
        else if (this._filtre == "Tous") 
        {
            for (let i = 0; i < livres.length; i++) {

                Dom =` <div class="carte" data-js-pos= ${i}>
                    <img src="${livres[i].image}">
                    <p>${livres[i].titre}</p>
                    <p><b>${livres[i].prix}</b></p>
                    <button>Ajouter</button>
                    </div>`;
            this.elDetail.insertAdjacentHTML('beforeend', Dom) ; 
            }        
        }
        else     
        {
            for (let i = 0; i < livres.length; i++) {

                if (this._filtre == livres[i].categorie) {
                    Dom =` <div class="carte" data-js-pos= ${i}>
                    <img src="${livres[i].image}">
                    <p>${livres[i].titre}</p>
                    <p><b>${livres[i].prix}$</b></p>
                    <button>Ajouter</button>
                    </div>`;
                    this.elDetail.insertAdjacentHTML('beforeend', Dom) ;
                        
                }       
           }      

        } 
                /* 
                (this._filtre == livres[index].categorie) {
                    let Dom =` <div data-js-pos= ${index}>
                <img src="${livres[index].image}">
                <p>${livres[index].titre}</p>
                </div>`;
    
                this.elDetail.insertAdjacentHTML('beforeend', Dom) ;
                new Livre(livres[index]) */
                
                 //let element = this._filtre[index].innerHTML;
                 //console.log(element);    
    } 
           // this._filtre.addEventListener("click",this.traiterFormulaire.bind(this));
           // console.log(this._filtre);
    

    

    afficherTous(){

        for (let i = 0; i < livres.length; i++) 
        {
            let livre = new Livre (livres[i]);
            injecterLivreDom(livre , i);     
        }
    }

    /* afficherNouveaute(){

    }

    afficherPArCategorie(){

    } */

    injecterLivreDom(livre , index)
    {

        let Dom =` <div data-js-pos= ${index}>
        <img src="${livre.getImage()}">
        <p>${livre.getTitre()}</p>
        </div>`;


      /*   let Dom =` <div data-js-pos= ${index}>
            <img src="${livres[index].image}">
            <p>${livres[index].titre}</p>
            </div>`; */

            this.elDetail.insertAdjacentHTML('beforeend', Dom) ;
            /*new Livre(livres[index])*/

            return Dom;
    }

    /* traiterFormulaire(){
  
        for (let index = 0; index < 12; index++) {
            let Dom =` <div data-js-pos= ${index}>
            <img src="${livres[index].image}">
            <p>${livres[index].titre}</p>
            </div>`;

            this.elDetail.insertAdjacentHTML('beforeend', Dom) ;
            new Livre(livres[index]);
            
        }
    } */
}
