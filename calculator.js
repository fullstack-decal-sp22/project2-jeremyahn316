//Check out calculator_hints.js for hints if you're stuck
let total = 0;
let strbuffer = "0"
let operator = null;

function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total += intBuffer;
    } else if (operator === "x") {
        total *= intBuffer;
    } else if (operator === "-") {
        total -= intBuffer;
    } else if (operator === "÷") {
        total /= intBuffer;
    } else {
        return;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        total = 0;
        strbuffer = "0";
        operator = null;
    } else if (symbol === "←") {
        if (strbuffer.length === 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        }
    } else if (symbol === "=") {
        calculations();
        operator = null;
        strbuffer = total.toString();
    } else {
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total += intBuffer;
        } 
        operator = symbol;
        strbuffer = "0";
    }
}

function setListeners() {
    let button = document.querySelectorAll(".buttons"); 
    for (item of button) {
        item.addEventListener("click", function (event) {
            buttonClicked(event.target.innerText);
        })
    }
}

setListeners();

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) {
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerText = strbuffer;
}
