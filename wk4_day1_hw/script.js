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
console.log("******************Testing the Hamster Class***********************")
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
        this.height += 0.40;//feet
        this.weight += 2;
        this.mood -= 1;
        this.bankAccount += 10;

    }

    buyHamsterFactory(hamster){
        let newHamster = new Hamster(hamster);
        newHamster.owner = this.name;
        this.hamsters.push(newHamster);
        //increment mood, decrement bankAccount
        this.mood += 10;
        this.bankAccount -= newHamster.getPrice();
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        //increment mood, decrement bankAccount
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

//testing**************Person Class
console.log("******************Testing the Person Class***********************")
const person0 = new Person("Alejandra");
console.log(person0.getName(), person0.getAge(), person0.getWeight());
person0.greet();
person0.eat();
console.log(person0);//weight and mood increased
person0.exercise();
console.log(person0);//weight decreased
person0.ageUp();
console.log(person0);//mood decreased: age, height, weight, bankAccount increased
person0.buyHamsterFactory("Kitten");
console.log(person0);//mood increased, added a Hamster, and bankAccount decreased


//Create a Story with your Person Class (Extra)
console.log("*********************The Story of Timmy************************/n")
    //1. Instantiate a new Person named Timmy
const person1 = new Person("Timmy");
    //2. Age Timmy 5 years
for(let i = 0; i < 5; i++){
    person1.ageUp();
}
console.log(person1);
    //3. Timmy easts five times
for(let i = 0; i < 5; i++){
    person1.eat();
}
console.log(person1);
    //4. Timmy exercise five times
for(let i = 0; i < 5; i++){
    person1.exercise();
}
console.log(person1);
    //5. Timmy ages 9 more years
for(let i = 0; i < 9; i++){
    person1.ageUp();
}
console.log(person1);
    //6. Make a hamster named "Gus"
let gus = new Hamster("Gus");
    //7. Gus' owner is set to Timmy
gus.owner = person1.getName();
    //8. Timmy buys Gus
person1.buyHamster(gus);
console.log(person1);//Gus appears as Timmy's hamster
    //9. Age Timmy 15 years
for(let i = 0; i < 15; i++){
    person1.ageUp();
}
console.log(person1);
    //10. Timmy eats twice
for(let i = 0; i < 2; i++){
    person1.eat();
}
console.log(person1);
    //11. Timmy exercises twice
for(let i = 0; i < 2; i++){
    person1.exercise();
}
console.log(person1);


//separator between Person and Dinner/Chef class

console.log("*************************Chef and Dinner Logging*****************************\n");

//Chef Make Dinners

class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
//methods to update the properties of a Dinner
    updateAppetizer(updatedApp){
        this.appetizer = updatedApp;

    }

    updateEntree(updatedEnt){
        this.entree = updatedEnt;

    }

    updateDessert(updatedDess){
        this.dessert = updatedDess;

    }


}//end dinner class

class Chef{
    constructor(name, business, maxJobsLeftInDay){
        this.name = name;
        this.business = business;//the name of their business/restaurant
        this.bookedSolid = false;
        this.dinners = [];
        this.maxJobsLeftInDay = maxJobsLeftInDay;//max number of jobs left in a day
        this.earnings = 0;//starting from 0 earnings as a Chef
    }

    /**factory for dinners, and return the created dinner assortment*/
    makeDinners(appetizer, entree, dessert){
        let newDinner = new Dinner(appetizer, entree, dessert);
        this.dinners.push(newDinner);
        return (newDinner);
    }

    /**take on one job, and add the money earned from that job to earnings*/
    takeOnAJobToday(moneyEarned){
        if(this.maxJobsLeftInDay > 0){
            this.maxJobsLeftInDay -= 1;
            this.earnings += moneyEarned;
        } else{
            //if there are 0 or less jobs available, run bookedSolid
            this.#bookedSolidState();
        }
        
    }

    /**private method for calling booked solid when no more jobs can be taken on */
    #bookedSolidState(){
        this.bookedSolid = true;
        console.log("Booked for the Day, cannot take on another job!");
    }

    /**resets the conditions to initial levels*/
    resetForTheNextDay(maxJobs){
        this.dinners = [];
        this.maxJobsLeftInDay = maxJobs;
        this.bookedSolid = false;
    }
}//end Chef class

//making three dinners and logging them******************

let chef0 = new Chef("Alejandro", "The Running Dragon", 2);

//console log three Dinners

console.log(chef0.makeDinners("Smoked Salmon Crustini", "Chili Cheese Dogs", "Key Lime Cheesecake"));

console.log(chef0.makeDinners("Grilled Pear Arugula Salad", "Deep Fried Tofu Burger", "Dark Chocolate Chip White Chololate Cookie"));

console.log(chef0.makeDinners("Chipotle Hushpuppies", "Chili Mac", "Vegan Smores Icecream Sandwich"));

console.log(chef0);//dinners added to dinners array of Chef

//testing extra methods 
console.log("************************Additional Chef Methods Tested/Demonstrated************************\n");

chef0.takeOnAJobToday(200);

console.log(chef0);

chef0.takeOnAJobToday(2000);

console.log(chef0);

chef0.takeOnAJobToday(12000);

console.log(chef0);

chef0.resetForTheNextDay(5);

console.log(chef0);






