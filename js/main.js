
function askQuestions() {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + " " + lastName

	$('h2').text('Hello ' + fullName); /*hey jquery - say hello, then full name to user */

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >=13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') 
	{	console.log("Greetings, General");
	} else {
			console.log('Go Away');
		}

	var faveColour = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'yellow' ||
		faveColour == 'green') {

		$('h2').css('color', faveColour);
		}

}


// alert($) this means check for jquery - hey jquery
// When the page loads
$(function() {    //function just means do this stuff

	$('img').on('click', askQuestions);

	//hide the sections
	$('h3').next().hide();

	// When the user clicks an h3 heading, then look for this (click, hover, move, resize etc...) and do his stuff (function)
	$('h3').on('click',function() {

		// Show or hide the next element - or toggle etc...
		$(this).next().slideToggle(200);


	});

})