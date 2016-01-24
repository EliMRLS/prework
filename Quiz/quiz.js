var user = {}
var responses = []
	
function firstQuestion() {
  var answer = prompt('What is your name?')
  user.name = answer
}


function secondQuestion() {

  var answer = prompt('Is Fox Mulder a special agent for the FBI in the TV Series X-Files ? (Yes or No)')

  if (answer.toLowerCase() === 'yes') {
    answer = true;
  } 
  else if (answer.toLowerCase() === 'no') {
    answer = false;
  } 
  else {
    alert('Please answer either Yes or No');
    return secondQuestion();
  }
  responses.push(answer); 
}


function thirdQuestion() {
    
    var answer = prompt("Who's agent Mulder's sidekick? (Type in corresponding number) \n1.Detective Lorraine \n2.Veronica Mars \n3.Dana Scully \n4.Agent Keen");

    switch (answer.toLowerCase()) {
        case '1':
            answer = false;
            break;
        case '2':
            answer = false;
            break;
        case '3':
            answer = true;
            break;
        case '4':
            answer = false;
            break;
        default:
            alert('Please use only numbers 1 to 4 for answering');
        return thirdQuestion();
    }

    responses.push(answer);
}


function forthQuestion() {
    
    var answer = prompt("Which member of Mulder's family was abducted when he was a child? (Type in corresponding number) \n1.His mother \n2.His sister \n3.His grandpa \n4.None of the above ");

    switch (answer.toLowerCase()) {
        case '1':
            answer = false;
            break;
        case '2':
            answer = true;
            break;
        case '3':
            answer = false;
            break;
        case '4':
            answer = false;
            break;
        default:
            alert('Please use only numbers 1 to 4 for answering');
        
        return forthQuestion();
    }

    responses.push(answer);
}



function fifthQuestion() {

  	var answer = prompt('Are agents Mulder and Scully played by the same actors in the 2016 return of the show? (Yes or No)')

  	if (answer.toLowerCase() === 'yes') {
    	answer = true;
  	} 
  	else if (answer.toLowerCase() === 'no') {
    	answer = false;
  	} 
  	else {
    	alert('Please answer either Yes or No');
  
  	return fifthQuestion();
}

  responses.push(answer); 
}



function evaluate(responses) {
var totalRights = 0; 
var totalWrongs = 0;

	for (var i = 0; i < responses.length; i++){
		if (responses[i] === true){
			totalRights += 1;
			totalWrongs += 0;
			user.tright = totalRights;
			user.twrong = totalWrongs;
		}
		else {
			totalWrongs += 1;
			user.twrong = totalWrongs;
		}
	}
	showResults(); 
}

function showResults() {
	alert('Hi ' + user.name + ', you have answered ' + ((user.tright) + (user.twrong)) + ' questions.');
	alert('Right answers: ' + user.tright);
	alert('Wrong answers: ' + user.twrong);
}


firstQuestion();
console.log(user);
secondQuestion();
console.log(responses[0]);
thirdQuestion();
console.log(responses[1]);
forthQuestion();
console.log(responses[2]);
fifthQuestion();
console.log(responses[3]);

evaluate(responses);


