function operationsBetweenNumbers(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let oper = input[2];
    let sum = 0;
    switch (oper) {
        case "+":
            sum = firstNum + secondNum; break;
        case "-": sum = firstNum - secondNum; break
        case "*": sum = firstNum * secondNum; break;
        case "/":
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            }
            else {
                sum = firstNum / secondNum;
                console.log(`${firstNum} / ${secondNum} = ${(sum).toFixed(2)}`);
            } break;
        case "%":
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            }
            else {
                sum = firstNum % secondNum;
                console.log(`${firstNum} % ${secondNum} = ${sum}`);
            }
            break;
    }
    if (oper === "+" || oper === "-" || oper === "*") {
        if (sum % 2 === 0) {
            console.log(`${firstNum} ${oper} ${secondNum} = ${sum} - even`);
        }
        else {
            console.log(`${firstNum} ${oper} ${secondNum} = ${sum} - odd`);
        }
    }
}
operationsBetweenNumbers(["10", "1", "-"])
