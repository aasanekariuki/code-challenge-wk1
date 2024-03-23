
function calculateGrade(marks){

    if  (marks > 100 || marks < 0) {
        grade = "Invalid input"
    }
        
    else if (marks > 79 ){
        grade = "you have an A";
    }
    else if (marks >= 60 && marks <= 79){
        grade = "you have a B";
    }
    else if (marks >= 50 && marks <= 59){
       grade = "you have a C";
    }
     else if (marks >= 40 && marks <= 49){
        grade = "you have a D";
     }
    else {
        grade = "you have an E";
    }
    return grade

}
console.log(calculateGrade());
