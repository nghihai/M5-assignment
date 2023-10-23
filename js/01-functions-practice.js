//STEP 1
function halfNumber(number) {
    console.log(`Half of ${number} is ${number/2}`)
}

//STEP 2
function squareNumber(number) {
    console.log(`The result of squaring the number ${number} is ${number * number}`)
}

//STEP 3
function percentOf(firstNum, secondNum)
{
    let percent = (firstNum * 100)/secondNum
    console.log(`${firstNum} is ${percent}% of ${secondNum}`)
}

//STEP 4
function findModulus(firstNum,secondNum)
{
    let modulus
    if (firstNum > secondNum)
        modulus = firstNum % secondNum
    else 
        modulus = secondNum % firstNum
    console.log(`${modulus} is the modulus of ${firstNum} and ${secondNum}`)
}

//STEP 5: Call all the functions
halfNumber(5)
squareNumber(3)
percentOf(2, 4)
findModulus(4,10)