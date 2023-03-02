
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

        element.innerHTML = 'Loading...';

        const renderValue = ( value ) => {
                element.innerHTML = value;
        }

        Promise.race([ // Todo coloca a competir todas las promesas y representa cual responde mas rapido
                slowPromise(),
                mediumPromise(),
                fastPromise(),
                mediumPromise(),
                slowPromise(),        
        ]).then( renderValue );
}

/**
 * Funcion que regresa una promesa, forma corta
 * @returns 
 */
const slowPromise = () => new Promise( resolve => {

       setTimeout(() => {// Todo Funcion de javascript sirve para ejecutar en un tiempo especifico la función
                resolve('Slow Promise');
        },2000);

});


/**
 * Funcion que regresa una promesa, forma corta
 * @returns 
 */
const mediumPromise = () => new Promise( resolve => {

        setTimeout(() => {// Todo Funcion de javascript sirve para ejecutar en un tiempo especifico la función
                 resolve('Medium Promise');
         },1500);
 
 });



 /**
 * Funcion que regresa una promesa, forma corta
 * @returns 
 */
const fastPromise = () => new Promise( resolve => {

        setTimeout(() => {// Todo Funcion de javascript sirve para ejecutar en un tiempo especifico la función
                 resolve('Fast Promise');
         },3000);
 
 });