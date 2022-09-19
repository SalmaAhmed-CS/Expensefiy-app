// Nourmal function
const square = function(x){
return x*x ;
};
// arrow function
// const squareArrow =(x) => {
//     return x*x ;
// };
const squareArrow =(x) => x*x;
 
console.log(squareArrow(8));

// challenge

// const firstname = (fullName) =>    fullName.split(' ')[0];
 let fullName = 'salma Ahmed'
// console.log(firstname(fullName));

const firstname_1 = (fullName) => {
    if(fullName){
        let firstname = fullName.split(' ')[0]
         return firstname
     }
};
console.log(firstname_1(fullName));
