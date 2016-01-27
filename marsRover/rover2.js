var rover = {
  position: [0,0], //the rover starts at the lower-left corner of the grid
  direction: ['North', 'East', 'South', 'West'],
  currentDirection: 0 
};

//Convert the sequence of movements given into an array
function getInstructions(commands){
  var instructions = commands.split(" ");
  return instructions;
}

//Check if rover has to move (forward/backwards) or rotate (left/right)
function movements(instructions){
  for (var i = 0; i < instructions.length; i++){

    switch (instructions[i]){
      case 'f':
      move('f');
      break;

      case 'b':
      move('b');
      break;

      case 'l':
      rotateLeft();
      break;

      case 'r':
      rotateRight();
      break;
    }
  }
}


//Rotate right
function rotateRight(r){
  if (rover.currentDirection +1 <= 3){
      rover.currentDirection++;
  } else {
      rover.currentDirection = 0;
  }
}

//Rotate left
function rotateLeft(l){
  if (rover.currentDirection -1 >= 1){
      rover.currentDirection--;
  } else {
      rover.currentDirection = 0;
  }
}


//Make a move (forward or backwards)
//If it's going off the grid, it automatically sets the value of position to 0 or 9, so the rover will wrap from one edge of the grid to another.

function move(where){
	switch (rover.currentDirection){

		case 0: //Make a move while facing North
		if (where === 'f'){ //We're going forward
			if (rover.position[0] + 1 <=9){
				rover.position[0]++;
			} else {
				rover.position[0] = 0;
			}
		} else { //We're going backwards
			if (rover.position[0] - 1 >=0){
				rover.position[0]--;
			} else {
				rover.position[0] = 9
			}
		}
		break;

		case 1: //Make a move while facing East
		if (where === 'f'){ 
			if (rover.position[1] + 1 <=9){
				rover.position[1]++;
			} else {
				rover.position[1] = 0;
			}
		} else { 
			if (rover.position[1] - 1 >=0){
				rover.position[1]--;
			} else {
				rober.position[1] = 9;
			}
		}
		break;

		case 2: //Make a move while facing South
		if (where === 'f'){
			if (rover.position[0] - 1 >=0){
				rover.position[0]--;
			} else {
				rover.position[0] = 9;
			}
		} else {
			if (rover.position[0] + 1 <=9){
				rover.position[0]++;
			} else {
				rover.position[0] = 0;
			}
		}
		break;

		case 3: //Make a move while facing West
		if (where === 'f'){
			if (rover.position[1] - 1 >=0){
				rover.position[1]--;
			} else {
				rover.position[1] = 9;
			} 
		} else {
			if (rover.position[1] + 1 <=9){
				rover.position[1]++;
			} else {
				rover.position[1] = 0;
			}
		}
		break;
	}
}



movements('fffrflbbrf'); 
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
console.log("New Rover Direction: " + rover.direction[rover.currentDirection])
