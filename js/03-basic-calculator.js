// ADD A FUNCTION CALLED CALCULATE
function calculate(firstNum, secondNum, operation) 
{
    let result
    switch (operation){
        case "+":
            result = firstNum + secondNum
            break
        case "-":
            result = firstNum - secondNum
            break
        case "*":
            result = firstNum * secondNum
            break
        default:
            result = firstNum / secondNum
    }
    return result 
}

function display()
{
    // COLLECT FIRST NUMBER FROM USER
    firstNum = parseInt(prompt("Please enter the first number: "))

    // COLLECT SECOND NUMBER FROM USER
    secondNum = parseInt(prompt("Please enter the second number: "))

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    do 
    {
        operation = prompt("Please enter the operation that you want to perform (+, -, *, /): ")
    } while (operation != "+" && operation != "-" && operation != "*" && operation != "/")

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    alert(`The result is ${calculate(firstNum,secondNum,operation)}`)
}

display()