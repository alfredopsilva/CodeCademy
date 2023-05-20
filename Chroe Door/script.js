// Access HTML elements
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start')

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';



let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door

/**
 * Check if a door can be clicked or not. If the SRC it is equal a closedDoorPath, than can be clicked. 
 * @param {string} door 
 * @returns true / false
 */
function isClicked(door)
{
    if(door.src === closedDoorPath)
    {
        return true;
    }
    else{

        return false; 
    }
}

/**
 * Check if the picture displayed is a robot or not. 
 * @param {string} door 
 * @returns true / false
 */ 
function isBot(door)
{
    if(door.src === botDoorPath)
    {
        return true;
    }
    else
    {
        return false; 
    }

}

/**
 * Set tha game over , if the status is 'win' will return a player as a winner. This function doesn't return anything.
 * Will just update the "startButton"
 * @param {string} status 
 */ 
function gameOver(status)
{ 
    if(status === 'win')
    {
        startButton.innerHTML = 'You Win! Play Again?'
    }
    else
    { 
        startButton.innerHTML = 'Game Over! Play Again?'
    }

    currentlyPlaying = false; 
}

/**
 * Will receive a door as an argument and make the move. The move can be made if the variable @numClosedDoors is greater than 0
 * and if the bot's picture wasn't displayed. If the robot's picture is being displayed, so the gameOver() is called without argument.
 * @param {string} door 
 */
function playDoor(door)
{
    numClosedDoors--
    if(numClosedDoors === 0)
    {
        gameOver('win'); 
    }
    else if(isBot(door) === true){ 
        gameOver();
    }
}

/**
 * This function is responsible for generate a random number between 0 an 2, and set the images orders. 
 * This function doesn't return data. 
 */
function randomChoreDoorGenerator()
{ 
    let choreDoor = Math.floor(Math.random() * numClosedDoors)

    if(choreDoor === 0)
    {
        openDoor1 = botDoorPath; 
        openDoor2 = beachDoorPath; 
        openDoor3 = spaceDoorPath
    }
    else if(choreDoor === 1)
    {
        openDoor1 = beachDoorPath; 
        openDoor2 = botDoorPath; 
        openDoor3 = spaceDoorPath
    }
    else
    { 
        openDoor1 = beachDoorPath; 
        openDoor2 = spaceDoorPath; 
        openDoor3 = botDoorPath
    }

}

/**
 * Function responsible to start the game, for that, all images src's are set as closed, @numClosedDoor is reset to 3,
 *  @currentlyPlaying is set to true and @startButton is reset. 
 */
function startRound()
{
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3; 
    currentlyPlaying = true; 
    startButton.innerHTML = 'Good Luck!'
    randomChoreDoorGenerator();
}

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
}

// Start a game round


startRound()