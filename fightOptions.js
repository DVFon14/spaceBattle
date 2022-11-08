const ourShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7
}

class enemyShipClass {
constructor () {
  this.e_hull = Math.random() * 3 + 3;
  this.e_firepower = Math.random() * 2 + 2;
  this.e_accuracy = Math.random() * 0.2 + 0.6;
}
}

const shipsArray =[]

for (i=0; i<6; i++){
const enemyShips = new enemyShipClass()
shipsArray.push(enemyShips)
}



module.exports = {
  fightOptions: (fightInput) => {
    
    console.log("fightinput is ", fightInput);
    if (fightInput == 1) {
      console.log("Brave soldier! Let's begin");
      //we're going to need a for loop here, where i=0; i<6; i++ to iterate through every ship.


      
      if(ourShip.accuracy > shipsArray[0].e_accuracy){ //if we hit
        const newEnemyHull = shipsArray[0].e_hull-ourShip.firepower
        console.log(`Due to your superior accuracy, you hit the enemy ship! Their hull is now ${newEnemyHull}`)
        

        if(newEnemyHull <= 0 ){ //if we Destroy the ship on our first hit
          console.log(`Congratulations, soldier! You have defeated this enemy ship.`)
          console.log(`Press 1 to continue attacking or 2 to retreat`)


          let {retreat} = require("./retreat.js");

          let continueGame = (userInput2) => {
            let input2 = userInput2;
            retreat(input2);
          };

          process.stdin.on("data", continueGame);


        } 
      
      
      }
      else if (ourShip.accuracy < shipsArray[0].e_accuracy) {
        console.log('You missed! Take better aim next time!')
        console.log(`It is their turn to attack. Since their firepower is ${shipsArray[0].e_firepower}, our hull is no ${ourShip.hull-shipsArray[0].e_firepower}`)
      }
    
        









    } else if (fightInput == 2) {
      console.log("You can't put this off forever! Be brave and fight.");
    } else {
      console.log("Stop messing around! The fate of our world is at stake!");
    }
  },
};



// let {retreat} = require("./retreat.js");

// let continueGame = (userInput2) => {
//   let input2 = userInput2;
//   retreat(input2);
// };

// process.stdin.on("data", continueGame);











      // console.log(ourShip.accuracy)
      // console.log(`This is their accuracy ${shipsArray[0].e_accuracy}`)
      // console.log(`This is their firepower ${shipsArray[0].e_firepower}`)
      // console.log(`This is their hull ${shipsArray[0].e_hull}`)