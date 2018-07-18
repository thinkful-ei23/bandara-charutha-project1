function decode(word) {
	firstChar = word[0];
	if (firstChar === 'a') {
		return word[1];
	}
	else if (firstChar === 'b') {
		return word[2];
	}
	else if (firstChar === 'c') {
		return word[3];
	}
	else if (firstChar === 'd') {
		return word[4];
	}
	else {return ' '};
	
}

let message = 'craft block argon meter bells brown croon droop';

function sentenceToWord(sentence) {
	let newArray = sentence.split(" ");
	let newMessage = [];
	for (let i = 0; i < newArray.length; i++) {
		newMessage.push(decode(newArray[i]));
	}
	return console.log(newMessage.join(""));
}

sentenceToWord(message); 