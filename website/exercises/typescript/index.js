// enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
})(Color || (Color = {}));
let rect = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
};
function area(r) {
    return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);
rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
};
console.log(rect.toString());
