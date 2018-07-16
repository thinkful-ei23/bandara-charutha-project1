function rps(option) {
	const randomNo = Math.floor(Math.random() * 3) + 1;
	if (randomNo === 1 && option === 3) { // rock beats scissors
		return "rock beats scissors";
	}
	else if (randomNo === 3 && option === 1) {
		return "rock beats scissors";
	}
	else if (randomNo === 1 && option === 2) {
	return "paper beats rock";
	}
	else if (randomNo === 3 && option === 2) {
		return "scissors beats paper";
	}
	else if (randomNo === 2 && option === 1) {
		return "paper beats rock";
	}
	else if (randomNo === 2 && option === 3) {
	return "scissors beats paper";
	}
	else if (randomNo === option) {
		return "result is a tie";
	}
	else {throw new Error("Pick a number between 1 and 3");}
}

console.log(rps(1));
console.log(rps(2));
console.log(rps(3));
// console.log(rps(6));