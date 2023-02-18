import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbaksComponent = ( element ) => {

        const id = '5d86371fd55e2e2a30fe1ccb1';
        findHero( id, (hero) => { // Se coloca cualquien nombre en la funcion

                element.innerHTML = hero.name;
        });

}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {

        const hero = heroes.find( hero => hero.id === id );  

        callback( hero );

}