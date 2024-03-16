var a = 5;
var message;

switch (a) {
    case 3:
        message = 'A was a three';
        break;
    case 5:
        message = 'A was a five';
        break;
    default:
        message = "A was none of the cases";
}

var a = "world";
var message;

switch (a) {
    case "hello":
        message = 'A was hello';
        break;
    case "world":
        message = 'A was world';
        break;
    default:
        message = "A was none of the cases";
}

console.log(message);