
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {

        console.time('Start');

        //Todo: son promesas independientes entre sí
        // const value1 = await slowPromise();
        // const value2 = await mediumPromise();
        // const value3 = await fastPromise();

        // Espera a cada promesa se realiza, pero de manera simultanea 
        // Luego desestructura el arreglo
        const [value1, value2, value3] = await Promise.all([
                slowPromise(),
                mediumPromise(),
                fastPromise(),       
        ]);

        element.innerHTML =`
                value1: ${ value1 } <br>
                value2: ${ value2 } <br>
                value3: ${ value3 } <br>

                `
        console.timeEnd('Start');
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
          },1000);
  
  });