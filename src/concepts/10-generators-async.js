import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async( element ) => {

        const heroGenerator = getHeroGenerator();
        let isFinished = false;


        do {
                const { value, done } = await heroGenerator.next();
                isFinished = done;
                if( isFinished ) break; // Todo: si el done es true salimos del ciclo

                element.innerHTML = value;
                
        } while ( !isFinished );

}


async function* getHeroGenerator() {
        
        for( const hero of heroes ){
                await sleep();//Todo: espera hasta que finalice la promise dentro de la funcion sleep
                yield hero.name;
                
        }
        return 'no hay mas valores';
}


/**
 * Espera un segundo para su resolución
 * @returns {Promise}
 */
const sleep = () => {

        return new Promise (( resolve ) => {
                setTimeout(() => {
                        resolve();
                }, 500);        
        });

}