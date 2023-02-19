import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbaksComponent = ( element ) => {

        const id = '5d86371fd55e2e2a30fe1ccb1';
        findHero( id, (error, hero) => { // Se coloca cualquien nombre en la funcion

                if ( error ){
                        element.innerHTML = error;
                        return;
                }

                // element.innerHTML = hero?.name || 'No hay Heroe'; // forma para validar  ?  and ||
                element.innerHTML = hero.name; // forma para validar  ?  and ||

        });

}

/**
 * 
 * @param {String} id 
 * @param { (error: String|null, hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {

        const hero = heroes.find( hero => hero.id === id );  

        if( !hero ){
                callback(`Hero with id ${ id } not found.`);
                return; // sale de la funcion // undefined;
        }

        callback( null,  hero ); // se envia null porque no tiene ningun error 

}