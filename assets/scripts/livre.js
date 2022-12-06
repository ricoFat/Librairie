export default class Livre
{
    #prix;
    #description;
    #titre;
    #categorie;
    #editeur;
    #pages;
    #nouveaute;
    #auteur;

    /**
     * Constructeur de la classe Livre 
     * @param oLivre
     */
    constructor(oLivre)
    {
        this._el = oLivre;
        this.#prix = this._el.prix;
        this.#description = this._el.description;
        this.#titre = this._el.titre;
        this.#auteur = this._el.auteur;
        this.#editeur = this._el.editeur;
        this.#pages = this._el.pages;
        this.#nouveaute = this._el.nouveaute;
        this.#categorie = this._el.categorie

        this.tuile = document.querySelector('[data-js-pos]');
        
        /* console.log(this.prix);
        console.log(this.tuile); */
        this.init()
    }

    init()
    {
        this.tuile.addEventListener('click', function (e) {
            e.preventDefault;
            console.log("Je suis le livre ");
            console.log(this.getPrix());
            console.log(this.getEditeur());


       
        }.bind(this));
    }

    getPrix()
    {
        return this.#prix;
    }
    
    getEditeur()
    {
        return this.#editeur;
    }

    getDescription()
    {
        return this.#description;
    }

    getNouveaute()
    {
        return this.#nouveaute;
    }

    getPages()
    {
        return this.#pages;
    }

    getAuteur()
    {
        return this.#auteur;
    }

    getCategorie()
    {
        return this.#categorie;
    }
}