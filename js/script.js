let BMIButton = document.getElementById("calculateBMI");

BMIButton.addEventListener("click", () => {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    console.log("bmi weight", weight);

    console.log("bmi height", height);

    if(weight === "" || height === ""){
        alert("Please enter height and weight");
        return;
    }

    const heightInMeter = height / 100;
    let bmiValue = weight / (heightInMeter * heightInMeter);
    console.log("bmi value", bmiValue);

    bmiValue = bmiValue.toFixed(2);

    document.getElementById("result").innerText = "Your BMI: " + bmiValue;

    let category = "";
    let color = "";

    if (bmiValue < 18.5) {
        category = "Underweight";
        color = "red";
    } 
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = "Healthy";
        color = "green";
    } 
    else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = "Overweight";
        color = "orange";
    } 
    else {
        category = "Obesity";
        color = "red";
    }

    document.getElementById("category").innerText = "Category: " + category;
    document.getElementById("result").style.color = color;
});