//  arguments object - no longer with arrow functions
const add = function (a ,b){
    console.log(arguments)
    return a+b ;
};

console.log (add(55,1,100))
 

const add_2 =  (a ,b) =>{
   // console.log(arguments)
    return a+b ;
};

console.log (add_2(55,1,100))
// this key word -no longer bound

const user ={
    name: 'salma',
    cities: ['ksa','uk'],
    // printplaeceslived: function (){
    //     console.log(this.name);
    //     console.log(this.cities)
    //    // لكن لو كانت اروو فنكشن يضبط  لو استخدم ذس دوت نيم مايستغل في النيستد لازم اعرف ذات 

    //    const that = this 
    //     this.cities.forEach(function(city){
    //         console.log(that.name + 'has lived in '+ city )
    //     });

    //     this.cities.forEach((city) =>
    //         console.log(this.name + 'has lived in '+ city )
    //     );

    // },

    printplaeceslived_2() {
       return  this.cities.map((city) => {
         return this.name +' has lived in '+ city +'!';
       });
        // this.cities.forEach((city) =>
        // console.log(this.name + 'has lived in '+ city )
    //);
        
    }

};

//Chailnge 
const multiplier ={
    number: 2,
    multyiplyby: [4,8],
    multiply(){
        return this.multyiplyby.map((num)=>{
            return this.number*num
        } )

    }
}

console.log(multiplier.multiply())
//user.printplaeceslived();
console.log(user.printplaeceslived_2());
 