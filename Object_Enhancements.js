// 1. function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  /* Write an ES2015 Version */
//when the keys are the same name as the variable values:

function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName,
    }
}
// 2. 
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


let favoriteNumber = 42;
const instructor = {
    firstName:"Colt",
    [favoriteNumber]: "That's my favorite!"
}


// 3.
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

  const instructor={
      firstName:"Colt",
      sayHi() {
          return 'Hi!';
        },
      sayBye() {
          return this.firstName + "says bye!";
        },
    
  }


  
// 4.
function createAnimal(species,verb,noise){
    return {
        species,
        [verb](){
            return noise;
        },
    }
}

