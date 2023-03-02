import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

        const id1 = '5d86371f2343e37870b91ef1';
        const id2 = '5d86371f25a058e5b1c8a65e';


        //Se puede aplicar desestructuraciones de los valores recibidos
        const { name: name1 } = await findHero( id1 );// Todo (await)  me devuelve el objeto que estoy esperando, no una promesa 
        const { name: name2 } = await findHero( id2 );// Todo (await)  me devuelve el objeto que estoy esperando, no una promesa 
        
        element.innerHTML = `${ name1 } / ${ name2 }`;


}

const findHero = async( id ) => {

        const hero = heroes.find( hero => hero.id === id );
        if( !hero )
                throw `Hero not found`;

        return hero;
}