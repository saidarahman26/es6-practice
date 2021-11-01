const ages = [12,13,14,17,20];
const ages2 = [30,20,29];
const ages3 =[12,22,34,23,12];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges2);