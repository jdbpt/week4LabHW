/**Week 4 Day 1 HW
 * Hardmode is not required
 * for each section
 * at least 2-3 methods for each one
 * Create a Story with your Person Class is optional
 * Complete all else including Chef
 */

/**JavaScript Classes Lab 3 */

//Hamster

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
}
