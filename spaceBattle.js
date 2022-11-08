console.log(
  "Aliens are attacking our planet! Join us in our battle to save Earth."
);

console.log(
  "Each soldier will be off to face a squadron of 6. Don't worry, they attack one at a time."
);

console.log(
  "The odds are in your favor, as your Hull is a solid 20, while theirs is between 3 and 6;"
);
console.log("your firepower is 5, while theirs is between 2 and 4;");
console.log("and your accuracy is 0.7, while theirs is between 0.6 and 0.8");

console.log(
  "Are you ready to start the fight? Type '1' for yes and '2' for no"
);



const { get } = require("https");
let {fightOptions} = require("./fightOptions.js");

let playGame = (userInput) => {
  let input = userInput;
  fightOptions(input);
};

process.stdin.on("data", playGame);


const ourShip = {
    hull: 20,
    firepower: 5,
    accurarcy: 0.7
}

// const e_hull = Math.random() * 3 + 3;
// console.log(e_hull)


// function e_firepower(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// console.log(e_hull(3,6))



class enemyShipClass {
  constructor () {
    this.e_hull = Math.random() * 3 + 3;
    this.e_firepower = Math.random() * 2 + 2;
    this.accuracy = Math.random() * 0.2 + 0.6;
  }
  // generateCar () {
  //   const newCar = new Car(this.company, this.cars.length); //instantiating a new object
  //   this.cars.push(newCar);
  // }
  // findCar (index) {
  //   return this.cars[index]; //this.cars[1]
  // }
}

const enemyShip1Instance = new enemyShipClass()
console.log(enemyShip1Instance)