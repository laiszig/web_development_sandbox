var ourFriends = {
    name1 : "Laurance",
    name2 : "Mike",
    name3 : "David"
};

var ourFriends = ["Laurance", 1, 4, 5, 0, "Mike", "David"];
ourFriends[10] = "New";
ourFriends.push("Next item");

ourFriends.pop();

console.log(ourFriends);

var f = ourFriends.toString();
var g = "Laurence, Mike, David,,,,,,,,,New";

var h = g.split(',');

var i = ourFriends.join(",");

var nFriends = ourFriends.slice(1,3);