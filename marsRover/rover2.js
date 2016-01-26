var rover = {
  position: [0,0], 
  direction: ['N']
};

//Convert the sequence of movements given into an array
function getInstructions(commands){
  var instructions = commands.split(" ");
  return instructions;
}

//Check if rover has to move forward, backwards, left or right
function moves(instructions){
  for (var i = 0; i < instructions.length; i++){

    switch (instructions[i]){
      case 'f':
      moveForward();
      break;

      case 'b':
      moveBackwards();
      break;

      case 'l':
      moveLeft();
      break;

      case 'r':
      moveRight();
      break;
    }
  }
}

//Move rover forward
//Each character 'f' subtracts 1 from the current position[0]. 
//If it's going off the top edge of the grid (!>=0), it automatically sets the value of position[0] to 9, so rover will appear at the bottom edge.
function moveForward(f){
  if ((rover.position[0] - 1) >= 0) {
    rover.position[0]--;
  } else {
    rover.position[0] = 9;
  }
}

//Move rover backwards
//Each character 'b' adds 1 from the current position[0]. 
//If it's going off the bottom edge of the grid (!<=9), it automatically sets the value of position[0] to 0, so rover will appear at the top edge.
function moveBackwards(b){
  if (rover.position[0] + 1 <= 9) {
    rover.position[0]++;
  } else {
    rover.position[0] = 0;
  }
}

//Move rover right
//Each character 'r' adds 1 from the current position[1]. 
//If it's going off the right edge of the grid (!<=9), it automatically sets the value of position[1] to 0, so rover will appear at the left edge.
function moveRight(r){
  if (rover.position[1] + 1 <= 9) {
    rover.position[1]++;
  } else {
    rover.position[1] = 0;
  }
}

//Move rover left
//Each character 'l' subtracts 1 from the current position[1]. 
//If it's going off the left edge of the grid (!>=0), it automatically sets the value of position[1] to 9, so rover will appear at the right edge.
function moveLeft(l){
 if ((rover.position[1] - 1) >= 0) {
    rover.position[1]--;
  } else {
    rover.position[1] = 9;
  }
}


moves('bbbbbbrf'); //New Rover Position: [5, 1]
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
