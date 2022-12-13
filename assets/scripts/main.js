import Librairie from './Librairie.js';
import Panier from './Panier.js';
(function () 
{

    let elLib = document.querySelectorAll('[data-js-librairie]');

    for (let i= 0; i < elLib.length; i++) 
    {
        new Librairie(elLib[i]);
    }

    let elPanier = document.querySelector('[data-js-panier]');
    if (elPanier) new Panier(elPanier);
})();

