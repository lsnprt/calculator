const operatorDiv = document.querySelector(".operator");

const operatorNodes = document.querySelectorAll(".operation");
const operatorArray = Array.from(operatorNodes);

const mainPara = document.querySelector("#main");
const previousPara = document.querySelector("#previous");

const digitNodes = document.querySelectorAll(".digit");
const digitArray = Array.from(digitNodes);

const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");

const equalBtn = document.querySelector("#equals");

operatorArray.map(button => {
    button.addEventListener("click", e => {
        const target = e.target.textContent;
        operatorDiv.innerText = target;

        if (previousPara.innerText.length === 0){
            previousPara.innerText = mainPara.innerText;
            mainPara.innerText = "";
        }
    });
});

digitArray.map(button => {
    button.addEventListener("click", e => {
        const target = e.target.textContent;

        if(mainPara.textContent === "0"){
            if (target == 0){
                return;
            }

            mainPara.textContent = target;
            return;
        }

        if(mainPara.textContent.length <= 10){
            mainPara.innerText += target; 
        }
    });
});

clearBtn.addEventListener("click", () => {
    operatorDiv.innerText = "";
    previousPara.innerText = "";
    mainPara.innerText = "0";
});

deleteBtn.addEventListener("click", () => {
    if (mainPara.innerText.length > 0){
        mainPara.innerText = mainPara.textContent.length === 1 ? "0" : mainPara.innerText.slice(0, -1);
    }
});

equalBtn.addEventListener("click", () => {
    if(mainPara.innerText.length === 0 || previousPara.innerText.length === 0){
        return;
    }

    const firstNumber = parseFloat(previousPara.innerText); 
    const secondNumber = parseFloat(mainPara.innerText);
    const operator = operatorDiv.innerHTML;

    mainPara.innerText = operate(firstNumber, secondNumber, operator);
    previousPara.innerText = "";
    operatorDiv.innerText = "";
})


function operate(a, b, operator){
    switch (operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "\xD7":
            return a * b;
        case "\xF7":
            return b === 0 ? "ERROR" : a / b;
    }
}