const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");


function computeTemp(event) {
    // console.log("change");
    // console.log(event.target.name);
    // console.log(event.target.value);

    const currentValue = +event.target.value;
    //the + will convert the string value to number
    switch(event.target.name){
        case "celsius":
            kelvinEl.value = (currentValue +273.32).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 +32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value=((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue -32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = ((currentValue -273.32)).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break; 
    }
}