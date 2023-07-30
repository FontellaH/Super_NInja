class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed =speed;
        this.strength = strength;
    }
//add a method called sayName()... this will console the ninja's name to the console
    sayName(){
        console.log("The ninja name is ${this.name}");
    }
//add a method called showStats()... this will show the ninja's name, strength, speed and health
    showStats(){
        console.log("Name: ${this.name}, Health: ${this.health}, Speed:  ${this.speed}, Strength: ${this.health}");
    }

// add a method drinkSake()... this should add +10 to the ninja
    drinkSake(){
        console.log("Drinking this sake will add", this.health)
        this.health += 10;
        console.log("The ninjas new health: ", this.health)
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength =10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
    }


}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"