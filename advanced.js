var square = document.getElementById("squareId");
console.dir(square);

// var color = prompt("which color of rectangle do you want?");

//console.log(color);

//square.style.background = color;


var width = prompt("which width of rectangle in pixels do you want?");
console.log(width);
square.style.width = width + "px";


var height = prompt("which height of rectangle in pixels do you want?");
console.log(height);
square.style.height = height + "px";

var border = prompt("which style of border do you want?");
console.log(border);
square.style.border = border;
