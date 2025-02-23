function calculateBMI() {
    let weight = Number(prompt("Enter Your weight in kg 'e.g 50 kg'"));
    let height = Number(prompt("Enter Your Height in meters 'e.g 1.75 m'"));
    // BMI calculation formula
    let bmiCalculator = weight / (height * height);

    if (bmiCalculator < 18.5) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Underweight (below 18.5)");
    }

    else if (bmiCalculator >= 18.5 && bmiCalculator <= 24.9) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Normal weight (18.5 - 24.9)");
    }

    else if (bmiCalculator >= 25.0 && bmiCalculator <= 29.9) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Overweight (25.0 - 29.9)");
    }

    else if (bmiCalculator >= 30.0 && bmiCalculator <= 34.9) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Obesity Class 1 (Moderate) (30.0 - 34.9)");
    }

    else if (bmiCalculator >= 35.0 && bmiCalculator <= 39.9) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Obesity Class 2 (Severe) (35.0 - 39.9)");
    }

    else if (bmiCalculator > 40.0) {
        alert("Your Body Mass Index is : " + bmiCalculator.toFixed(2) + "\nCategory : Obesity Class 3 (Extreme) (above 40.0)");
    }
    else {
        alert("Invalid input!" + "\nPlease enter valid Weight and Height values.");
    }
}

function calculateHeight() {
    let weight = Number(prompt("Enter Your weight in kg 'e.g 50 kg'"));
    let bmi = Number(prompt("Enter Your Body Mass Index (BMI) 'e.g 20'"));
    // Height calculation formula
    let heightCalculator = Math.sqrt(weight / bmi);

    if (heightCalculator < 1.52) {
        alert("Your Height is : " + heightCalculator.toFixed(2) + " m" + "\nCategory : Very short Height (below 1.52 m)");
    }

    else if (heightCalculator >= 1.52 && heightCalculator <= 1.62) {
        alert("Your Height is : " + heightCalculator.toFixed(2) + " m" + "\nCategory : Short Height (1.52 m - 1.62 m)");
    }

    else if (heightCalculator >= 1.63 && heightCalculator <= 1.75) {
        alert("Your Height is : " + heightCalculator.toFixed(2) + " m" + "\nCategory : Average Height (1.63 m - 1.75 m)");
    }

    else if (heightCalculator >= 1.76 && heightCalculator <= 1.99) {
        alert("Your Height is : " + heightCalculator.toFixed(2) + " m" + "\nCategory : Tall Height (1.76 m - 1.99 m)");
    }

    else if (heightCalculator >= 2.00) {
        alert("Your Height is : " + heightCalculator.toFixed(2) + " m" + "\nCategory : Very Tall Height (above 2.00 m)");
    }

    else {
        alert("Invalid input!" + "\nPlease enter valid weight and BMI values.");
    }
}

function calculateWeight() {
    let height = Number(prompt("Enter Your Height in meters 'e.g 1.75 m'"));
    let bmi = Number(prompt("Enter Your Body Mass Index (BMI) 'e.g 20'"));
    // Weight calculation formula
    let weightCalculator = bmi * (height * height);

    if (!weightCalculator) {
        alert("Invalid input!" + "\nPlease enter valid Height and BMI values.");
    }

    else if (weightCalculator < 50) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Underweight (below 50 kg)");
    }

    else if (weightCalculator >= 50 && weightCalculator <= 68) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Normal Weight (50 kg - 68 kg)");
    }

    else if (weightCalculator >= 69 && weightCalculator <= 82) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Overweight (69 kg - 82 kg)");
    }

    else if (weightCalculator >= 83 && weightCalculator <= 98) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Obesity Class 1 (Moderate) (83 kg - 98 kg)");
    }

    else if (weightCalculator >= 99 && weightCalculator <= 113) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Obesity Class 2 (Severe) (99 kg - 113 kg)");
    }

    else if (weightCalculator >= 114) {
        alert("Your Weight is : " + weightCalculator.toFixed(2) + " kg" + "\nCategory : Obesity Class 3 (Extreme) (above 114 kg)");
    }
}
