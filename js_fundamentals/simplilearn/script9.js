var ourFriends = {
    person1: {
        name: "Laurance",
        age: 40,
        cars: {carMake: "Ford", carValue: 25000}
    },
    person2 : {
        name : "Mike",
        age: 20
    },
    person3: {    
    name : "David",
    age: 30
    }
};

var a = 1;
console.log(ourFriends['person' + a].name);
a++;
console.log(ourFriends['person' + a].name);
a++;
console.log(ourFriends['person' + a].name);
a++;