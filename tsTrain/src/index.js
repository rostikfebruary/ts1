// interface IUser<D> {
//     name: string
//     age: number
//     house: number
//     // data:D
// }
// const user1:Partial<IUser> = {
//     // name: 'max',
//     // age: 12,
//     house: 9,
//     // data: [1, 2, 3]
// }
//
// console.log(user1)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, seats, year, enginePower) {
        this.brand = brand;
        this.seats = seats;
        this.year = year;
        this.enginePower = enginePower;
        this.brand = brand;
        this.seats = seats;
        this.year = year;
        this.enginePower = enginePower;
    }
    Car.prototype.start = function () {
        console.log('rrrrrr');
    };
    Car.prototype.getInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Seats: ").concat(this.seats, ", Year: ").concat(this.year));
    };
    Car.prototype.getLedStatus = function () {
        return true;
    };
    return Car;
}());
var car1 = new Car('Mercedes', 5, 2025, 3.1);
console.log(car1);
car1.getInfo();
car1.getLedStatus();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.area = function () {
        return this.c / (this.a + this.b);
    };
    Triangle.prototype.perimeter = function () {
        return this.a * this.b * this.c;
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Square.prototype.area = function () {
        return this.a * this.b;
    };
    Square.prototype.perimeter = function () {
        return (this.a + this.b) / 2;
    };
    return Square;
}(Shape));
var shapes = [
    new Triangle(1, 2, 3),
    new Square(2, 3)
];
console.log(shapes);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.constructor['name']);
    console.log(shape.area());
    console.log(shape.perimeter());
}
