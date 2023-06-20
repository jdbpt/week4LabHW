/*Week 4 Day 1 HW
 * Hardmode is not required
 * for each section
 * at least 2-3 methods for each one
 * Create a Story with your Person Class is optional
 * Complete all else including Chef
 */

/*JavaScript Classes Lab 3 */

//Hamster
/**A Hamster object, with owner, name, price, and methods*/
class Hamster{
    constructor(name){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun(){
        console.log("squeak squeak");
    }

    eatFood(){
        console.log("nibble nibble");
    }

    getPrice(){
        return (this.price);
    }
}//end Hamster class


//testing*********Hamster Class
const hammy = new Hamster("Hammy");
hammy.wheelRun(), hammy.eatFood(), console.log(hammy.getPrice());
class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;//integer
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`${this.name} says \"Hello!\"`)
    }

    eat(){
        //improve mood, and increase weight
        this.mood += 5;
        this.weight += 2;
    }

    exercise(){
        //decrease weight
        this.weight -= 0.12;
    }

    ageUp(){
        //decrement mood, all else increment
        this.age += 1;
        this.height += 0.25;//feet
        this.weight += 2;
        this.mood -= 1;
        this.bankAccount += 10;

    }

    buyHamster(hamster){
        let newHamster = new Hamster(hamster);
        this.hamsters.push(newHamster);
        //increment mood, decrement bankAccount
        this.mood += 10;
        this.bankAccount -= newHamster.getPrice();
    }


}

