import Librairie from './librairie.js';
import { livres } from "./livres.js";
(function () {

    let elLib = document.querySelectorAll('[data-js-librairie]');

    for (let i= 0; i < elLib.length; i++) 
    {

        new Librairie(elLib[i]);

    }

})();

