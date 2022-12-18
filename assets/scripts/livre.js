import { livres } from "./livres.js";
import Panier from "./Panier.js";
export default class Livre
{

    /**
    * Constructeur de la classe Livre 
    * @param el
    */
    constructor(el)
    {
        this._el = el;
        this.position = this._el.dataset.jsPosition;
        this._elPanel = document.querySelector('[data-js-modal]');
        this._elAffiche = document.querySelector('[data-js-livre]');
        this._AjoutBtn = this._el.querySelector('button');
        this._elHTML= document.documentElement;
        this._elBody = document.body;
        this.init();
    }

    init()
    {

        this._el.addEventListener('click', this.afficheModal.bind(this));
        this._elPanel.addEventListener('click', this.fermerModal.bind(this));
        this._AjoutBtn.addEventListener('click', this.ajouterSession.bind(this));
                
    } 

    /**
     * 
     */

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
                    
        this._elAffiche.innerHTML = dom;  
        this._elHTML.classList.toggle('overflow-y-hidden');
        this._elBody.classList.toggle('overflow-y-hidden');      
    }

    /**
     * Fonction de fermeture du modal
     */

    fermerModal()
    {
        this._elPanel.classList.replace('modal--open', 'modal--close');
        this._elHTML.classList.toggle('overflow-y-hidden');
        this._elBody.classList.toggle('overflow-y-hidden');
        
    }

    /** 
     * @param {*} e
     * fonction d'ajout du livre à la session storage au clic du bouton ajouter
     *  Sauvegardes les objets dans un tableau d'objets  Json
     */

     ajouterSession(e)
    {
        e.stopPropagation();
                
        let obj = {
                    titre: livres[this.position].titre,
                    prix: livres[this.position].prix
                },
            panier;

        /**
         * Si la session storage est null on initialise le tableau à vide 
         * on ajoute le premier livre 
         * Sinon  on recupère le tableau en session et ajouter le nouvel objet
         */
                
        if (sessionStorage.getItem('panier') === null) 
        {   
            panier = [];
            panier.push(obj);
            sessionStorage.setItem('panier', JSON.stringify(panier));
        }
        else
        {
            panier = JSON.parse(sessionStorage.getItem('panier'));
            let estPresent = estPresentLivre();

            if (!estPresent) 
            {
                panier.push(obj);    
            } 
                    
            // Enregistrer le tableau dans le session storage
            sessionStorage.setItem('panier', JSON.stringify(panier));
         /*    let elPanier = document.querySelector('[data-js-panier]');
            if (elPanier)
            {   
                let cart =  new Panier(elPanier);
                cart.afficherPanier();
            } 
             */
                     
        }

        /**
         * fonction qui vérifie la presence d'un livre qu'on doit ajouter 
         * S'il existe on retourne vrai  sinon on retourne faux.
         * 
         * @returns boolean estPresent
         */

        function estPresentLivre() {
            let estPresent = false;

            for (let i = 0; i < panier.length && !estPresent; i++) {
                let item = panier[i];
                if (item.titre == obj.titre) {
                    estPresent = true;
                }
            }
            return estPresent;
        }
           
    } 

}