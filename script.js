
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy
    }
    
}

class MainShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
        
            this.name = "USS Assembly",
                this.hull = 20,
                this.firepower = 5,
                this.accuracy = .7
        }
       attackAlien(target){
        let randomNum = Math.random()
        if (randomNum <= this.accuracy){
            target.hull -= this.firepower 
              window.alert(`Attacked ${target.name} for ${this.firepower} damage!`)
        } else{
           (window.alert('You missed us!'))
        }
        target.attackMain(this)
       }
  }
    

  class AlienShip extends Ship {
    constructor(name, hull, firepower, accuracy){
       super(name, hull, firepower, accuracy)
       this.name = name,
       this.hull = (Math.floor(Math.random() * 4) + 3), // function getRandomArbitrary(min, max) { Math.random() * (max - min) + min;
       this.firepower = Math.floor((Math.random() * 3) + 2), // Math.floor(math.random() * ((max - min) + 1) + min) <== whole number
       this.accuracy =  ((Math.random()* .2) + .6).toFixed(2) // (Math.random() * (max - min)) + min <== decimal
   } 
   attackMain(target) {
       let randomNum = Math.random()
        if (randomNum < this.accuracy) {
           target.hull -= this.firepower
           window.alert(`Attacked ${target.name} for ${this.firepower} damage!`); // target is the actual target of the attack. any changes made on target.whatever are going to affect the actual thing given to it.
            
        }
        else { window.alert('You have missed!') }
       }
 }
  
    
      // add additional properties for the "Main Ship"'
    const USSAssembly = new MainShip 
    const alienShip1 = new AlienShip ("Alien Ship 1")
    const alienShip2 = new AlienShip ("Alien Ship 2")
    const alienShip3 = new AlienShip ("Alien Ship 3")
    const alienShip4 = new AlienShip ("Alien Ship 4")
    const alienShip5 = new AlienShip ("Alien Ship 5")
    const alienShip6 = new AlienShip ("Alien Ship 6")


    const allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]
      console.log(allAlien)


  USSAssembly.attackAlien(alienShip4)


  const atackButton = document.getElementById('attack')
  attackButton.addEventListener('click', () => {

  })









 