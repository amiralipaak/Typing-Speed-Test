const theTimer = document.querySelector(".timer");
const testArea = document.querySelector(".text-area");
const testWrapper = document.querySelector(".text__area textarea");
const originalText = document.querySelector(".text__main").innerHTML;
var timer = [0, 0, 0, 0];
var timerRunning = false;
var interval;

function leadingZero(time) {
	if (time <= 9) {
		time = "0" + time;
	}
	return time;
}

function runTimer() {
	let currentTime =
		leadingZero(timer[0]) +
		" : " +
		leadingZero(timer[1]) +
		" : " +
		leadingZero(timer[2]);

	theTimer.innerHTML = currentTime;

	timer[3]++;

	timer[0] = Math.floor(timer[3] / 100 / 60);

	timer[1] = Math.floor(timer[3] / 100) - timer[0] * 60;

	timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

function spellCheck() {
	let textEntered = testArea.value;
	let originTextMatch = originalText.substring(0, textEntered.length);

	if (textEntered == originalText) {
		testWrapper.style.borderColor = "green";

		clearInterval(interval);
	} else {
		if (textEntered == originTextMatch) {
			testWrapper.style.borderColor = "yellow";
		} else {
			testWrapper.style.borderColor = "red";
		}
	}
}

function Start() {
	let textEnteredLength = testArea.value.length;

	if (textEnteredLength == 0 && timerRunning == false) {
		interval = setInterval(runTimer, 10);
		timerRunning = true;
	}
}

testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCheck);
