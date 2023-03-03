import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

        const id1 = '5d86371fd55e2e2a30fe1ccb5';
        console.log('Inicio de Componente')

        findHero( id1 )// Funcion asyncrona
                .then( name => element.innerHTML = name )
                .catch( error => element.innerHTML = error )
        
        console.log('Fin del componente');

}
/**
 * Funcion que me regresara el heroe correspondiente al ID ingresado
 * @param {String} id 
 * @returns  {Promise<String>}
 */
const findHero = async( id ) => {//Todo (async) transforma la función a regresar una promesa

        const hero = heroes.find( hero => hero.id === id );

        if( !hero )
                throw `Hero with id ${ id } not found`;

        return hero.name;
}