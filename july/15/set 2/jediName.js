function jediName(firstName, lastName) {
	return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Beyonce', 'Knowles'));

// Expected KnoBe