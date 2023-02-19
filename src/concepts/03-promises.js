import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {


}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {

        const promise = new Promise(( resolve, reject )=> {
                
                const hero = heroes.find( heroe => hero.id === id );

                if( hero ) {
                        resolve( hero );
                        return;
                }

                reject( `Hero with id ${ id } not found` )

        });

        return promise;

}