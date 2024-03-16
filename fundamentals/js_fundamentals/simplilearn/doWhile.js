var ourFriends = {
    name1: "Laurence",
    name2: "Mike",
    name3: "David",
    name4: "Last One"
};

//var a = 1;
//var b = 1;
var a = 4;
var b = 4;
while (a < 4) {
    console.log(ourFriends['name' + a]);
    a++;
}

do {
    console.log(ourFriends['name' + b]);
    b++;
}
while (a < 4); 