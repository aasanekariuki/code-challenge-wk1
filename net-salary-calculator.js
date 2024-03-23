function calculateNetSalary(basicSalary, benefits) {
    
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.15 },
        { min: 32334, max: 40385, rate: 0.20 },
        { min: 40386, max: 48334, rate: 0.25 },
        { min: 48335, max: Infinity, rate: 0.30 }
    ];

    // NHIF deductions
    const nhifDeductions = 0; // Replace with actual NHIF deduction calculation based on provided link

    // NSSF deductions
    const nssfDeductions = 0; // Replace with actual NSSF deduction calculation based on provided link

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate taxable income
    const taxableIncome = grossSalary - nhifDeductions - nssfDeductions;

    // Calculate tax (Payee)
    let tax = 0;
    for (const rate of taxRates) {
        if (taxableIncome >= rate.min && taxableIncome <= rate.max) {
            tax = (taxableIncome - rate.min) * rate.rate;
            break;
        }
    }

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Output the results
    console.log("Gross Salary: " + grossSalary);
    console.log("NHIF Deductions: " + nhifDeductions);
    console.log("NSSF Deductions: " + nssfDeductions);
    console.log("Payee (Tax): " + tax);
    console.log("Net Salary: " + netSalary);
}

// Example usage
calculateNetSalary(50000, 10000); // Adjust basic salary and benefits as needed