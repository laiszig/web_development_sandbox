var ourFriends = ["Laurence", "Mike", "David"];

for (a = 0; a < ourFriends.length; a++) {
    //console.log(a)
    //console.log(ourFriends[a]);
}

for (var x in ourFriends) {
    //console.log(typeof x)
    //console.log(ourFriends[x]);
}

for (x of ourFriends) {
    console.log(x);
}