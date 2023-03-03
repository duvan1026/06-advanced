
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

        const myGenerator = myFirstGeneratorFunction();


        console.log( myGenerator.next() );
        console.log( myGenerator.next() );
        console.log( myGenerator.next() );

        console.log( myGenerator.next() );

        console.log( myGenerator.next() );


        
}



function* myFirstGeneratorFunction() {

        yield 'Primer valor';//Todo: funciona similar al return, pero cuando se necuentra se pausa el programa
        yield 'Segundo valor';
        yield 'tercer valor';
        yield 'Cuarto valor';

        return 'Ya no hay valores';
        yield 'Ya no se puede hacer nada';
}