const person = {name: 'mahi', age: 17,phone: 01712633345,gfName:'moyna',address:'dhaka',friend:['sony','tony','nony']};

const { name,age,phone } = person;
// const name = person.name;
// const age = person.age;
console.log(name,age,phone);
console.log(name,age,phone);
console.log(name,age,phone);
console.log(name,age,phone);
console.log(name,age,phone);

const friends = ['sakib','sahin','sojib','shihab','sabbir','srk'];
const [boroBhai,chotoBhai] = friends;
console.log(boroBhai,chotoBhai);
const complexOfObject = {
    name: 'abc',
    info: {
        address: 'tongi',
        leader : 'tiger leader'
    
    }

}
const { leader } = complexOfObject.info;
console.log(leader);