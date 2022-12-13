export default class Panier
{
    constructor(el)
    {
        this._el = el;
        this._elAffiche = document.querySelector ('[data-js-affichage]');

        this.init();
    }

    init()
    {
        this._el.addEventListener('click', this.afficherPanier.bind(this));
    }

    /**
     * Fonction d'affichage  du panier
     */

    afficherPanier() {
        this._elAffiche.innerHTML = '';
        let panier = JSON.parse(sessionStorage.panier),
        total = this.calculerTotal(panier),
        domPanier;
        
        if(panier.length == 0 || !sessionStorage.panier)
        {
            domPanier = `<p>Il n\'y a pas d\'item dans le panier</p>`;
        }
        else
        {
            domPanier =  `<table>
             <tr>
                <th><small>Titre</small></th>
                <th><small>Prix</small></th>
             </tr>`;
            for (let i = 0; i < panier.length; i++) {
                let item  = panier[i];

                console.log("titre: "  + item.titre);
                console.log("prix: " + item.prix  );

                  domPanier += `<tr>
                    <td><small>${item.titre}</small></td>
                    <td><small>${item.prix}$</small></td>
                 <tr> 
                `;
                
            }
            domPanier +=`
            <tr>
                    <td><small><b>Total</b></small></td>
                    <td><small><b>${total}$</b></small></td>
                 <tr>
            </table>`;
        }
        
        this._elAffiche.innerHTML = domPanier;  

    }

    /**
     *  fonction qui calcule le prix total des livres 
     * @returns total 
     */

    calculerTotal(panier) 
    {
        let total = 0
        for (let i = 0; i < panier.length; i++) {
            let item = panier[i];

            total += item.prix;
        }
        return total;
    }
}
