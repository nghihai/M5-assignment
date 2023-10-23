//This function display title 
function displayGame()
{
    alert("Welcome to Rock, Paper, Scissors game")
}

/*
This function ask for the input of the user's choice as number, 
display use choice as a string and return the integer of user input
*/ 
const user = function () 
{
    alert("Enter number 1 for Rock, 2 for Paper and 3 for Scissors")
    
    let userChoice = parseInt(prompt("Please enter your choice: "))

    while (userChoice != 1 && userChoice != 2 && userChoice != 3)
    {
        alert("Invalid answer!")
        userChoice = prompt("Please enter your choice: ")
    }

    //Display the user choice
    if (userChoice === 1) {alert("You choose Rock")}
    else if (userChoice === 2) {alert("You choose Paper")}
    else {alert("You choose Scissors")}

    return userChoice   
}

/*
This funtion will generate computer's choice as a number
display computer's choice as a string and return the choice number

const computer = function () 
{

}

/*
This function will compare the two result of user and computer 
then display the result 

function gameResult(user, computer) {

}
*/
//main function to run the game
function main(){
    displayGame()
    user()

}

main()
