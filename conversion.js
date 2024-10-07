const valueEle = document.getElementById("value");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const result = document.getElementById("result");
const convert = document.getElementById("button")

convert.addEventListener("click", conversion);

function conversion(){
    const numb = parseFloat(valueEle.value);
    const fromunit = option1.value;
    const tounit = option2.value;
    let finalValue;

    if (fromunit === "Celsius"){
        if (tounit === "Kelvin"){
            finalValue = numb + 273.15;
        }
        else if(tounit === "Fahrenheit"){
            finalValue = (numb * 9/5) + 32;
        }
        else{
            finalValue = numb;
        }
    }
    else if (fromunit === "Fahrenheit") {
        if (tounit === "Celsius") {
            finalValue = (numb - 32) * 5/9;
        } else if (tounit === "Kelvin") {
            finalValue = (numb - 32) * 5/9 + 273.15;
        } else {
            finalValue = numb; 
        }
    } else if (fromunit === "Kelvin") {
        if (tounit === "Celsius") {
            finalValue = numb - 273.15;
        } else if (tounit === "Fahrenheit") {
            finalValue = (numb - 273.15) * 9/5 + 32;
        } else {
            finalValue = numb; 
        }
    }

    result.innerText = `After conversion: ${finalValue.toFixed(2)}`;
}