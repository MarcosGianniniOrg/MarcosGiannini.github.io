class GradeCalculator {
    // Declare the static method
    static calculateFinalGrade(examGrade, workGrade = 0, workWeight = 0.3) {
        // Validates that the scores are within the valid range
        if (examGrade < 0 || examGrade > 10 || workGrade < 0 || workGrade > 10){
            console.log(`Invalid grade: ${examGrade}. Grades must be between 0 and 10.`);
            return; // Exit the function if there's an error
        }

        // Validates that the weight is within the valid range
        if (workWeight < 0 || workWeight > 1){
            console.log(`Invalid weight: ${workWeight}. Weight must be between 0 and 1.`);
            return; // Exit the function if there's an error
        }

        // Calculates the final grade based on the formula
        const finalGrade = (examGrade * (1 - workWeight)) + (workGrade * workWeight);

        // Logs the result rounded to 2 decimal places
        console.log(`The final grade is: ${finalGrade.toFixed(2)}`);
     }
}
  
  // Examples of use:
  GradeCalculator.calculateFinalGrade(8, 7, 0.4);
  GradeCalculator.calculateFinalGrade(11, 7, 0.4);
  GradeCalculator.calculateFinalGrade(8, 7, 1.5);
  GradeCalculator.calculateFinalGrade(9);