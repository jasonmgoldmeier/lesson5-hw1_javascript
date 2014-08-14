


var answer = prompt("Pick a color red, white, or blue?");

	console.log(answer);

	function checkDoor(userAnswer) {
		if (userAnswer == 'red') {
			alert("America!!")
		}else if (userAnswer == 'white'){
			alert("Land of the free")
		}else if (userAnswer == 'blue'){
			alert("Home of the brave")
		}
		else{
			alert("Give it another shot, buddy!")
		}
	}

	checkDoor(answer)