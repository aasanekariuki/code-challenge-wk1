// Importing the 'readline' module to handle user input/output
const readline = require("readline");
// I created a user interface to read it from the terminal
const rl = readline.createInterface({

  input: process.stdin,

  output:process.stdout
})


const promptUser =() =>{
      
    rl.question("please enter the marks: " , (userInput) =>{

     if (userInput.toLocaleLowerCase()==="exit"){
     
      rl.close();
      return
    }
    
    console.log(calculateGrade(userInput))
    promptUser();
  }
    )
    
  }

  promptUser()

function calculateGrade(marks){
 // Check if the marks are less than 0 or greater than 100
    if  (marks > 100 || marks < 0) {
        grade = "Invalid input"
        // If yes, grade is "Invalid input"
    }
    // Check if the marks are greater than 79 
    else if (marks > 79 ){
        grade = "you have an A";
     // If yes, "you have an A"   
    }
    //Check if the marks are between 60 and 79
    else if (marks >= 60 && marks <= 79){
        grade = "you have a B";
    // If yes, "you have a B"    
    }
    //Check if the marks are between 50 and 59
    else if (marks >= 50 && marks <= 59){
       grade = "you have a C";
    //If yes, "you have a C"
    }
    //Check if the marks are between 40 and 49
     else if (marks >= 40 && marks <= 49){
        grade = "you have a D";
    //If yes, "you have a D"
     }
     //Check if the marks are less than 40
    else {
        grade = "you have an E";
    //If yes, "you have an E"
    }
    // Should return the calculated grade
    return grade;

}

console.log(calculateGrade());
