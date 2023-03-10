import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

        const id1 = '5d86371f2343e37870b91ef1';
        const id2 = '5d86371f25a058e5b1c8a65e';

        //Todo Manejo de promesas secuenciales con su respectivo manejo de errores

        try {
                const hero1 = await findHero( id1 );// Todo (await)  me devuelve el objeto que estoy esperando, no una promesa 
                const hero2 = await findHero( id2 );// Todo (await)  me devuelve el objeto que estoy esperando, no una promesa 
                
                element.innerHTML = `${ hero1.name } / ${ hero2.name }`;        
                
        } catch (error) {
               element.innerHTML = error; 
        }

}

const findHero = async( id ) => {

        const hero = heroes.find( hero => hero.id === id );
        if( !hero )
                throw `Hero ${ id } not found`;

        return hero;
}