namespace Geometria{
    
    export namespace Areas{
    //Lembrando de usar o export
    const PI = 3.14 

    export function Circunferencia(raio:number): number{
    //Usamos o export para dizemos que a função no namespacing pode ser exportada    
        return PI*Math.pow(raio,2)
    }
    }
}