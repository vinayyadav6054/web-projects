const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    // console.log("BMI clicked"); 
    const heightValue = document.getElementById("height").value /100
    const weightValue = document.getElementById("weight").value

    // console.log(heightValue,weightValue);

    const bmiValue = weightValue / (heightValue * heightValue);

    // console.log(bmiValue);

    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5){
        weightConditionEl.innerText = "Under Weight"
    }else if (bmiValue >= 18.5 && bmiValue<= 24.9){
        weightConditionEl.innerText = "Normal Weight";
    }else if ( bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText ="Over Weight";
    }else{
        weightConditionEl.innerText = "Obise"
    }
    
    
}


btnEl.addEventListener("click",calculateBMI)