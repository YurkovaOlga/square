var myName = "Olga Yurkova"; // string
var myAge = 42; // number
var bool = true;
var array = [ "Olga", 42, true ];
var array2 = [ myName, myAge ]; // camelCase

var colors = ["black", "white", "tabby"]
var Animal = {
    type: "Cat",
    paws: 4,
    can_Meow: true, // snake_case
    canBark: false,
    colors: colors,
    weight: "5 kg",
    child: {
        type: "kitten",
        paws: 4,
        tail: 1,
        weight: "500 g",   
    },
    owner: {
       name: myName, 
    }
}

// alert(Animal.type + " is parent of " + Animal.child.type); 
console.log(Animal);