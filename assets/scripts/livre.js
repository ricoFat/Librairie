import { livres } from "./livres.js";
import Panier from "./panier.js";

export default class Livre
{
    #description;
    #titre;
    #editeur;
    #pages;
    #auteur;

    /**
     * Constructeur de la classe Livre 
     * @param oLivre
     */
    constructor(el)
    {
         this._el = el;
         this.position = this._el.dataset.jsPosition;
         this._elPanel = document.querySelector('[data-js-modal]');
         this.elAffiche = document.querySelector('[data-js-livre]');
         this.AjoutBtn = this._el.querySelector('button');
    
        this.init()
    }

    init()
    {

        this._el.addEventListener('click', this.afficheModal.bind(this));
        this._elPanel.addEventListener('click', this.closeModal.bind(this));
        this.AjoutBtn.addEventListener('click', this.ajouterSession.bind(this));
             
    } 


    afficheModal() 
    {
        this._elPanel.classList.replace('modal--close' ,'modal--open');
    
        let dom = ` 
                    <img src="${livres[this.position].image}">
                    <div class = "info-livre">
                        <p><h3>Titre: ${livres[this.position].titre}</h3></p>
                        <p>Auteur: ${livres[this.position].auteur} </p>
                        <p>Éditeur: ${livres[this.position].editeur} </p>
                        <p>Pages: ${livres[this.position].pages} </p>
                        <p>${livres[this.position].description} </p>
                    </div>
                    `;
         this.elAffiche.innerHTML = dom;
          
    }

    closeModal()
    {
        this._elPanel.classList.replace('modal--open', 'modal--close');
        
        /* le modal */
        this.elAffiche = ``;
        console.log(this.elAffiche);
    }

    ajouterSession()
    {
        let sessionStorage = new Panier();
        let obj = {
            titre: livres[this.position].titre,
            prix: livres[this.position].prix
        }


        console.log("session");

        sessionStorage.setItem('livre',JSON.stringify(obj));

        let data = JSON.parse(sessionStorage.livre);

        console.log("data.titre: " + data.titre);
        console.log("data.prix: " + data.prix);
    }

}