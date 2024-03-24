// Importing the 'readline' module to handle user input/output
const readline = require("readline");
// I created a user interface to read it from the terminal
    const rl = readline.createInterface({
  
      input: process.stdin,
  
      output:process.stdout
    })
    
    rl.question("Enter basic salary:",(basicSalary)=>{
        rl.question("Enter benefits:", (benefits)=>{
            const result = calculateNetSalary(parseFloat(basicSalary),parseFloat(benefits));
            console.log("\nsalary Breakdown ");
            for (const key in result){
                console.log(`${key}: ${result[key]}`);
            }
            rl.close ();
        });
    });
   // Function to calculate the net salary based on basic salary and benefits.
function calculateNetSalary(basicSalary, benefits) {
    // Tax rates
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.30 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity , rate: 0.35 },
    ];

    // Fixed nhifdeductions
    const nhifDeductions = 2000;

    // Fixed nssfdeductions
    const nssfDeductions = 2000; 

    // Calculating gross salary
    const grossSalary = basicSalary + benefits;

    // Calculating taxable income by deducting NHIF and NSSF from gross salary
    const taxableIncome = grossSalary - nhifDeductions - nssfDeductions;

    
    let tax = 0;

    // Calculating tax based on tax rates and taxable income
    for (const rate of taxRates) {
        if (taxableIncome >= rate.min && taxableIncome <= rate.max) {
            tax = (taxableIncome - rate.min) * rate.rate;
            break;
        }
    }

    // Calculating net salary after deducting tax, NHIF, and NSSF 
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    
    console.log("Gross Salary: " + grossSalary);
    console.log("NHIF Deductions: " + nhifDeductions);
    console.log("NSSF Deductions: " + nssfDeductions);
    console.log("Payee (Tax): " + tax);
    console.log("Net Salary: " + netSalary);
}
calculateNetSalary()

