/**JavaScript Functions Lab
 * June 14, 2023
 */

function minusOne(num){
    console.log(num-1);
}

minusOne(10);
minusOne(100);
minusOne(Infinity);

const makeSentence = function(str0, str1, str2){
    //console.log(`Once upon a time, there was a person named ${str0} who loved ${str1} and just wanted to see the ${str2}`)
    console.log("Once upon a time, there was a person named " + str0 + " who loved " + str1 + " and just wanted to see the " + str2);

}

makeSentence("Herbert", "seaweed", "sea");


const getLastElement = function(arr){
    console.log(arr[arr.length-1]);

}

getLastElement([2, 3, 4, 5, 6, 7]);
getLastElement(['a', 'b', 'c']);
getLastElement([[2, 3, 4], [5, 6, 7]]);