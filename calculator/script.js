// catching the input box
let inputBox = document.getElementById('input-box');
// catching buttons
let buttons = document.querySelectorAll('button');

// we will store our result here
let resultString = "";

// all buttons wrapping in an array
let buttonArray = Array.from(buttons);

// taking each button
buttonArray.forEach(button => {
    // picking clicking button through event listener
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            resultString = eval(resultString);
            inputBox.value = resultString;
            // caught the "=" value and evaluate the value as a numeri operation
        }

        else if (e.target.innerHTML == "AC") {
            resultString = "";
            inputBox.value = resultString;
            // clear the input box
        }

        else if (e.target.innerHTML == "DEL") {
            resultString = resultString.substring(0, resultString.length-1);
            inputBox.value = resultString;
            // delete the last digit using substring
            // which will delete from last value
        }

        else {
            resultString += e.target.innerHTML;
            inputBox.value = resultString;
        }
    })
});
