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
