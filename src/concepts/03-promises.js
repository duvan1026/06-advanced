import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

        const renderHero = ( hero ) => {
                element.innerHTML = hero.name;
        }

        const renderErro = ( error ) => {
                element.innerHTML = `
                        <h1>ERROR:</h1>
                        <h3>${ error }</h3>
                `;
        }

        const renderTwoHeroes = ( hero1, hero2 ) => {
                element.innerHTML = `
                        <h3>${ hero1.name }</h3>
                        <h3>${ hero2.name }</h3>
                `;
        }

        const id1 = '5d86371f25a058e5b1c8a65e',
              id2 = '5d86371f233c9f2425f16916';

        let hero1;

        findHero( id1 )
                // .then( (superHero) => renderHero( superHero ) );
                .then( (hero1) => {

                        findHero( id2 )
                                .then( hero2 => {
                                        renderTwoHeroes( hero1, hero2 );
                                } );
                } ) 
                .catch( renderErro );


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