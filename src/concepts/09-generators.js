
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

        // const myGenerator = myFirstGeneratorFunction();
        // console.log( myGenerator.next() );

        const genId = idGenerator();

        const button = document.createElement('button'); // Todo: crea un boton
         button.innerText = 'Click me';

         element.append( button );


         const renderButton = () => {
                const { value } = genId.next();
                button.innerText = `Click ${ value }`;//Todo: concatena el valor del value en el botton
        }


        button.addEventListener('click', renderButton );
        
        
}


function* idGenerator(){

        let currentId = 0;

        while(true) {
                yield ++currentId; // incrementa y luego me regresa el valor
        }

}




//Todo: referencia de funcion generadora
// function* myFirstGeneratorFunction() {

//         yield 'Primer valor';//Todo: funciona similar al return, pero cuando se necuentra se pausa el programa
//         yield 'Segundo valor';
//         yield 'tercer valor';
//         yield 'Cuarto valor';

//         return 'Ya no hay valores';
//         yield 'Ya no se puede hacer nada';
// }