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

//console.log(shipsArray)



module.exports = {
  fightOptions: (fightInput) => {
    if (fightInput == 1) {
      console.log("Brave soldier! Let's begin");
      //we're going to need a for loop here, where i=0; i<6; i++ to iterate through every ship.
      console.log(ourShip.accuracy)
      console.log(shipsArray[0].e_accuracy)

      
      if(ourShip.accuracy > shipsArray[0].e_accuracy){ //if we hit
        console.log(`Due to your superior accuracy, you hit the enemy ship! Their hull is now ${shipsArray[0].e_firepower-ourShip.firepower}`)
        
        if(shipsArray[0].e_firepower-ourShip.firepower <0 ){ //if we Destroy the ship on our first hit
          console.log(`Congratulations, soldier! You have defeated this enemy ship.`)

        } 
      
      
      }
      else {
        console.log('You missed! Take better aim, next time!')
      }
    
        













    } else if (fightInput == 2) {
      console.log("You can't put this off forever! Be brave and fight.");
    } else {
      console.log("Stop messing around! The fate of our world is at stake!");
    }
  },
};



