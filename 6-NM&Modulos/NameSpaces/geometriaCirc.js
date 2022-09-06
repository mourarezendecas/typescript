"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        //Lembrando de usar o export
        const PI = 3.14;
        function Circunferencia(raio) {
            //Usamos o export para dizemos que a função no namespacing pode ser exportada    
            return PI * Math.pow(raio, 2);
        }
        Areas.Circunferencia = Circunferencia;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map