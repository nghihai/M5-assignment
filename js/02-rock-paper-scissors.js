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
    if (userChoice === 1) {alert("You chose Rock")}
    else if (userChoice === 2) {alert("You chose Paper")}
    else {alert("You chose Scissors")}

    return userChoice   
}

/*
This funtion will generate computer's choice as a number
display computer's choice as a string and return the choice number
*/
const computer = function () 
{
    //Generate random computer's choice 
    let computerChoice = Math.floor(Math.random() * 2 + 1)

    //Display the user choice
    if (computerChoice === 1) {alert("Computer chose Rock")}
    else if (computerChoice === 2) {alert("Computer chose Paper")}
    else {alert("Computer chose Scissors")}

    return computerChoice
}

/*
This function will compare the two result of user and computer 
then display the result 
*/
function gameResult(userChoice, computerChoice) {
    //handle the tie situation
    //alert(userChoice)
    //alert(computerChoice)
    while (userChoice == computerChoice) {
        alert("Tie")
        userChoice = user()
        computerChoice = computer()
    }

    if ((userChoice == 1 && computerChoice == 3) || (userChoice == 3 && computerChoice == 2) || (userChoice == 2 && computerChoice == 1))
    {   
        alert("You Win!")
    }
    else 
    {
        alert("Computer Win!")
    }

}

//main function to run the game
function main()
{
    do
    {
        displayGame()
        gameResult(user(),computer())
        playGame = prompt("Do you want to play again? y/n")

    } while(playGame === 'y')

    
}

main()
