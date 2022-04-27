"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.engine = 0;
    }
    Car.prototype.move = function () {
        console.log("engine🐛");
        var engine = this.engine + 1;
        console.log(engine);
    };
    return Car;
}());
var car = new Car();
car.move();
//# sourceMappingURL=main.js.map