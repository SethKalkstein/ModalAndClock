
Date.prototype.amPm = function () {
	if (this.getHours() <= 11 ){
		return "am";
	}
	else {
		return "pm";
	}
}

Date.prototype.hoursAmPm = function () {
	if (this.getHours() == 0 ){
		return 12;
	}
	else if (this.getHours()>=12) {
		return this.getHours()-12;
	}
}



var currentHour = document.getElementById("hours")
var currentSecond = document.getElementById("seconds")
var currentMinute = document.getElementById("minutes")
var currentAmPm = document.getElementById("ampm")


var intervalID = setInterval(addTimeHTML, 1000);

function addTimeHTML(){
	var rightNow = new Date();
	if (rightNow.getSeconds()<=9){
		currentSecond.innerHTML = "0"+rightNow.getSeconds();	
	}
	else{
		currentSecond.innerHTML = rightNow.getSeconds();
	}
	if (rightNow.getMinutes()<=9){
		currentMinute.innerHTML = "0"+rightNow.getMinutes();	
	}
	else{
		currentMinute.innerHTML = rightNow.getMinutes();
	}
	currentHour.innerHTML = rightNow.hoursAmPm();
	currentAmPm.innerHTML = rightNow.amPm();
	changeBackground(rightNow.getHours(),rightNow.getMinutes(),rightNow.getSeconds());
}
var mainBack = document.getElementsByTagName("main")[0];
var mainBody = document.getElementsByTagName("body")[0];
var headerLink1 = document.getElementsByTagName("a")[0];
var headerLink2 = document.getElementsByTagName("a")[1];
function changeBackground (hour, minute, second) {
	second= stringChanger(second);
	minute= stringChanger(minute);
	hour= stringChanger(hour);
	mainBack.style.backgroundColor = "#"+hour+minute+second;
	mainBody.style.color = "#"+hour+minute+second;
	headerLink1.style.color = "#"+hour+minute+second;
	headerLink2.style.color = "#"+hour+minute+second;
}

function stringChanger (timeVar){
	if (timeVar<10){
		timeVar = "0"+timeVar.toString();
	}
	else{
		timeVar = timeVar.toString();
	}
	return timeVar;
}