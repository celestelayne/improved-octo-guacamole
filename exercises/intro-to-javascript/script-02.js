// [1] If a person is less than 8 years old, recommend the merry-go-round.
// 	console.log("Check out the Merry-Go-Round. You'll love it!");
// [2] Otherwise if a person is more than 8 years old AND less than 65 years old AND more than 4.5 feet tall, recommend the roller coaster.
// console.log("Check out the Roller Coaster. It's awesome!");
// [3] Otherwise recommend the lazy river
// console.log('Why not enjoy a float down the Lazy River?');

let age = 35;
let height = 3;

if(age < 8){
  console.log("Check out the Merry-Go-Round. You'll love it!");
} else if (age > 8 && age < 65 && height > 4.5) {
  console.log("Check out the Roller Coaster. It's awesome!");
} else {
  console.log("Why not enjoy a float down the Lazy River?");
}