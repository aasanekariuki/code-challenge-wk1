// Importing the 'readline' module to handle user input/output
const readline = require("readline");
// I created a user interface to read it from the terminal
const rl = readline.createInterface({

  input: process.stdin,

  output:process.stdout
})


const promptUser =() =>{
      
    rl.question("please enter the speed: " , (userInput) =>{

     if (userInput.toLocaleLowerCase()==="exit"){
     
      rl.close();
      return
    }
    
    console.log(speedDector(userInput))
    promptUser();
  }
    )
    
  }

  promptUser()
function speedDector(speed){
   // Check if speed is < or = 70
     if  (speed <= 70 ){
        return  "OK"; // If yes, return "OK" 
     }
   // If speed is above 70, calculate demerit points
     else if ((demeritpoints = (speed - 70) / 5) <=12){
        return `points :${demeritpoints}`; // If demerit points are less than or equal to 12, return points
     }
     // If demerit points are >= 12, return "License suspended"
     else {
        return "License suspended";
     }

   }
   console.log(speedDector());