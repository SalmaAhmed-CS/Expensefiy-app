
class Person {
    // the uniq information for etch 
  constructor(name = 'Anonymous' , age = 0){
   this.name= name ;
   this.age = age;

  }
  getGretting(){
    //return 'Hi i am '+this.name+"!"
    return `Hi I am ${this.name}!`
  }
  getdiscription (){
    return `${this.name} is ${this.age} years old`
  }
}

// sub class 

class Student extends Person{
    constructor(name = 'Anonymous' , age = 0 , major = 'un'){
        super(name , age);
        this.major = major
     
       }
    hasMager(){
        return !! this.major
    }
    getdiscription (){
       let description = super.getdiscription();
       if (this.hasMager() ){
        description = description+ `Thie majer is ${this.major}. `
       }
       return description
    }

}

class Traveler extends Person{
    constructor(name = 'Anonymous' , age = 0 , homeloction = 'un'){
        super(name , age);
        this.homeloction = homeloction
     
       }
       hasloctin(){
        return !! this.homeloction
    }
    
       getGretting (){
       let gretting = super.getGretting();
       if (this.hasloctin() ){
        gretting += `I'am visiting from ${this.homeloction}`
       }
    
       return gretting
    }

}



const me = new Student('Salma Ahmed', 24, 'CS');
console.log(me.getGretting())
console.log(me.getdiscription())
//if no argment was send the name cod be the devoult value = Anonymous
const other = new Person();

const T = new Traveler('Salma Ahmed', 24, 'egpy');
console.log(T.getGretting())
