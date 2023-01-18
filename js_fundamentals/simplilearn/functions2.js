(function() {
    var test = "Hello World Init";
    console.log(test);
    if(b>3) {
        return false; } //break out of function
        console.log(test);
})();




var b = "Global B";

myFuna(b);
function myFuna(a) {
    var c = "Hello world";
    console.log(c);
    a += " world";
    console.log(a);
}

console.log(b);

// function myFun() {
//     //to be executed
//     console.log("hello");
// }

// myFun();

// function myFun(a) {
//     //to be executed
//     console.log(a);
// }

// myFun("hello ");

function myFun(a, b) {
    //to be executed
    console.log(a + " " + b);
    return a + " " + b;
}

myFun("hello", "world");


function mValues(a,b) {
    return a * b;
}

console.log(mValues(5,6));
var ourFriends = ["Laurence", "Mike", "David"];
function toArray(array, addNew) {
    array.push(addNew);
    console.log(array)
    return "add new item :)";
}

toArray(ourFriends, "New Item");