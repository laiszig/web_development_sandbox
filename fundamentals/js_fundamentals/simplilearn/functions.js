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