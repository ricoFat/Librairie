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
         /*
    
        this.#description = livres[this.position].description;
        this.#titre = livres[this.position].titre;
        this.#auteur = livres[this.position].auteur;
        this.#editeur = livres[this.position].editeur;
        this.#pages = livres[this.position].pages;
         */

        
    
         console.log(this.position);  
        this.init()
    }

    init()
    {
        /* this.tuile.addEventListener('click', function (e) {
            e.preventDefault;
            console.log("Je suis le livre ");
            console.log(this.getPrix());
            console.log(this.getEditeur());


       
        }.bind(this));*/
    } 

  
    getTitre()
    {
        return this.#titre;
    }
    
    getEditeur()
    {
        return this.#editeur;
    }

    getDescription()
    {
        return this.#description;
    }

    getPages()
    {
        return this.#pages;
    }

    getAuteur()
    {
        return this.#auteur;
    }

}