import Librairie from './Librairie.js';
(function () 
{

    let elLib = document.querySelectorAll('[data-js-librairie]');

    for (let i= 0; i < elLib.length; i++) 
    {

        new Librairie(elLib[i]);

    }
})();

