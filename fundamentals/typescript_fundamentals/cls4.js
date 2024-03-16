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
var Person = /** @class */ (function () {
    function Person(pn, age) {
        this.pname = "";
        this.age = 0;
        this.pname = pn;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return this.pname + " age is " + this.age;
    };
    return Person;
}());
var StdInfo = /** @class */ (function (_super) {
    __extends(StdInfo, _super);
    function StdInfo(pn, ag, sid, mk) {
        var _this = _super.call(this, pn, ag) || this;
        _this.sid = 0;
        _this.marks = 0;
        _this.sid = sid;
        _this.marks = mk;
        return _this;
    }
    StdInfo.prototype.getMarks = function () {
        return this.sid + " Secured Marks " + this.marks;
    };
    return StdInfo;
}(Person));
var Std1 = new StdInfo("Pavan", 24, 1001, 78);
console.log("Student Details : " + Std1.getDetails());
console.log("Student Marks : " + Std1.getMarks());
