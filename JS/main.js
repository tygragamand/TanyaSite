function test1() {
	var firstname = prompt ("Hey what's your name?");
	var mycolor = prompt ("Pick a color, " + firstname);

	if (mycolor == "red"){
		console.log("ha. this guy likes red");
	}
	else if (mycolor == "blue") {
		console.log("blue, my favourite color");
	}
	else if (mycolor == "yellow") {
		console.log("yellow huh, sure");
	}
	else if (mycolor == "green") {
		console.log("oh gosh, no...");
	}
	else {
		console.log ("that's not nice, he doesn't have one");
	}
}

function test2(){
	alert("I told you not to click on me! You don't listen! :/");
	var age = prompt("how old are you?");

	if (age < 18){
		alert("Click Alt + F4 to continue for the content");
	}
	else if (age > 18){
		alert ("Did you come to have some fun? ;D");
	}
	else if (age == 18){
		alert ("I'm still older than you ;D");
	}
	else {
		alert ("Not a valid age");
	}
}