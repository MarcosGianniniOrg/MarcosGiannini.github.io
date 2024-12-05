document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

// Get the birthday input value using 'getElementById'
const birthdate = new Date(document.getElementById('birthdate').value);

if (!birthdate || isNaN(birthdate)) {
    document.getElementById('result').textContent = 'Please select a valid date.';
    document.getElementById('result').style.visibility = 'visible';
    return;
}

const today = new Date();
let age = today.getFullYear() - birthdate.getFullYear();
const monthDifference = today.getMonth() - birthdate.getMonth();

// Adjust age if the birthay hasn't occurred this year
if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
    age--;
}

// Display the calculated age in the 'result' element
document.getElementById('result').textContent = `You are ${age} years old.`;
document.getElementById('result').style.visibility = 'visible';
});
