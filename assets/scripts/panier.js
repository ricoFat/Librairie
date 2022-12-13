import Livre from "./Livre.js";
export default class Panier
{
    constructor(el)
    {
        this._el = el;
        this._panier = document.querySelector('[data-js-panier]');

        //console.log(this._panier);
        this.init();
    }

    init()
    {
        this._panier.addEventListener('click', this.afficherPanier.bind(this));
    }

    afficherPanier()


    {
        let total = this.calculerTotal();
        
        if(this._el.length == 0 || this._el === null)
        {
            console.log("il n,y a pas d'item dans le panier");
        }
        else
        {
            for (let i = 0; i < this._el.length; i++) {
                let item  = this._el[i];
                console.log("titre: "  + item.titre);
                console.log("prix: " + item.prix + "\n");
                
            }
        }

       

        
        console.log("Total: " + total);

    }

    /**
     *  fonction qui calcule le prix total des livres 
     * @returns total 
     */

    calculerTotal() 
    {
        let total = 0
        for (let i = 0; i < this._el.length; i++) {
            let item = this._el[i];

            total += item.prix;
        }
        return total;
    }
}


