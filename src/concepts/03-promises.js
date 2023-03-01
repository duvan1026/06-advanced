import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

        const renderHero = ( hero ) => {
                element.innerHTML = hero.name;
        }

        const id1 = '5d86371f25a058e5b1c8a65e';

        findHero( id1 )
                // .then( (superHero) => renderHero( superHero ) );
                .then( renderHero ); // Todo  Se realiza cuando todo sale bien
                                     // Todo Prop-Tip si la función tiene los mismo argumentos de entrada, en el mismo orden se envia la funcion como refrencia


}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {

        return new Promise(( resolve, reject )=> {
                
                const hero = heroes.find( hero => hero.id === id );

                if( hero ) {
                        resolve( hero );
                        return;
                }

                reject( `Hero with id ${ id } not found` )

        });

}