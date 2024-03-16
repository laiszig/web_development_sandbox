var ourFriends = {
    name1: "Laurence",
    name2: "Mike",
    name3: "David",
    name4: "Last One"
};

for (a = 1; a < 4; a++) {
    console.log(ourFriends['name' + a]);
}

for (a in ourFriends) {
    console.log(a);
    console.log(ourFriends[a]);
}