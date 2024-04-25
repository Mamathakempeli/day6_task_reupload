// task2: Convert the UML diagram to Typescript class. - use number for double
class Circle {

    constructor(radius=1.0, color="red"){
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    toString() {
        return `Circle[radius = ${this._radius}, color = ${this._color}]`;
    }

    getArea() {
        return Math.PI*Math.pow(this._radius, 2);
    }

    getCircumference() {
        return 2*Math.PI*this._radius;
    }
}

const circle = new Circle;

circle.color = "orange";
circle.radius = "2.56";

console.log('Radius = ', circle._radius);
console.log('Color = ', circle._color);
console.log('toString = ', circle.toString());
console.log('Area of the circle = ', circle.getArea());
console.log('Circumference of the circle = ', circle.getCircumference());