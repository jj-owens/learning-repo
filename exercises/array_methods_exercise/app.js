var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
console.log(fruit.indexOf("orange"));
fruit.push(fruit.indexOf("orange"));
console.log(fruit);
console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(vegetables);
var food = fruit.concat(vegetables);
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food.toString(""));
 