"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        //Lembrando de usar o export
        const PI = 3.14;
        function Retangulo(base, altura) {
            return base * altura;
        }
        Areas.Retangulo = Retangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRet.js.map