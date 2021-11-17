class Ninja{
    constructor(name){
        this.name= name;
        this._health=100;
        this._speed=3;
        this._strength=3;
    }

    get speed(){
        return this._speed;
    }

    set speed(speed){
        this._speed = speed;
    }

    get health(){
        return this._health;
    }

    set health(health){
        this._health = health;
    }

    get strength(){
        return this._strength;
    }

    set strength(strength){
        this._strength= strength;
    }

    sayName(){
        console.log(`My ninja name is ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health +=10;
    }


}

class Sensei extends Ninja{

    constructor(name){
        super(name);
        this._health=200
        this._strength=10;
        this._speed=10;
        this._wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('These are my wise words...')
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();