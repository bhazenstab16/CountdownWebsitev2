/* JS */


var intervalHandler;
var newMinutes = 0;
var newSeconds = 0;
var newHours = 0;

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var timer = document.getElementById('timer');
var minutesBox = document.getElementById('minutesEnter');
var secondsBox = document.getElementById('secondsEnter');
function countDown()
{
	if(minutesBox.value <= 0 && secondsBox.value <= 0)
	{
		console.log("1");
		minutesBox.value = 0;
		secondsBox.value = 0;
		minutes.innerHTML = 0;
		seconds.innerHTML = 0;
		alert("The timer has reached 0");
		clearInterval(intervalHandler);
		return 0;
	}
	newSeconds--;
	console.log("2");
	if(newMinutes == -1)
	{
		newHours--;
		newMinutes = 59;
		newSeconds = 59;
		console.log("3");
	}
	if(newSeconds == -1)
	{
		newMinutes--;
		newSeconds = 59;
		console.log("4");
	}
	if(newSeconds == 0 && newMinutes == 0 && newHours > 0)
	{
		newHours--;
		newMinutes = 59;
		newSeconds = 59;
		console.log("5");
	}
	else if(newSeconds == 0 && newMinutes > 0)
	{
		newMinutes--;
		newSeconds = 59;
		console.log("6");
	}
	else if (newSeconds == 0 && newMinutes == 0 && newHours == 0)
	{
		alert("The timer has reached 0");
		clearInterval(intervalHandler);
		console.log("7");
	}
	minutesBox.value = newMinutes;
	secondsBox.value = newSeconds;
	console.log("8");
	updateTimer();
}

function updateTimer(){
	//set innerHTML of hours, minutes, seconds
	//to strings build out of newHours, newMinutes, newSeconds
	
	//error check input values here , can't add leading 0 (can't input 05 seconds), do in string, you can conctatenate a leading 0
	console.log("9");
	console.log("New hours" + newHours);
	newSeconds = secondsBox.value;
	newMinutes = minutesBox.value;
	if(minutesBox.value < 1 && minutesBox.value > 0)
	{
		minutesBox.value = 0;
		minutes.innerHTML = 0;
		console.log("10");
	}
	if(secondsBox.value < 1 && secondsBox.value > 0)
	{
		secondsBox.value = 0;
		seconds.innerHTML = 0;
		console.log("11");
	}
	if(secondsBox.value == "")
	{
		newSeconds = 0;
		secondsBox.value = 0;
		console.log("12");
	}
	if(minutesBox.value == "")
	{
		newMinutes = 0;
		minutesBox.value = 0;
		console.log("13");
	}
	if(newSeconds > 59)
	{
		newMinutes = newSeconds / 60;
		newMinutes = Math.trunc(newMinutes);
		newSeconds = newSeconds % 60;
		console.log("14");
	}
	if(newMinutes > 59)
	{
		newHours = newMinutes / 60;
		newHours = Math.trunc(newHours);
		newMinutes = newMinutes % 60;
		hours.innerHTML = newHours;
		console.log("15");
	}
	if(newHours == 0)
	{
		hours.innerHTML = "";
		hoursColon.innerHTML = "";
	}
	console.log("16");
	seconds.innerHTML = newSeconds;
	minutes.innerHTML = newMinutes;
}
function prepareEventHandlers() 
{
	document.getElementById('form').onsubmit = function()
	{
		//1. error checking...
		//  -empty boxes...
		//  -neg values
		//2. build string for timer
		//  -more than 59 minutes...
		//  -more than 59 seconds...
		//Set ininitial newMinutes, newHours, newSeconds
		
		//3. Handle interval...
		if(intervalHandler)
		{
			clearInterval(intervalHandler);
		}
		intervalHandler = setInterval(countDown, 1000);
		
		//4. Update timer...
		updateTimer();
		return false;
	}
}

window.onload = function() {
	prepareEventHandlers();
}