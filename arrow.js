// function doubleIt(num){
//     return num*2
// }

// const doubleIt = function myFun(num){
//     return num*2;
// }
const doubleIt = num => num*2;
const add = (x , y) => (x+y);
const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result2 = doMath(10,7);
console.log("multiplication result :",result2)

// const result = add(100, 50);
// console.log(result)