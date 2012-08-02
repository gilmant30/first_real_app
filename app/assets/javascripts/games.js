var count = 0;
function guessNumber(against) {
	var number = document.getElementById("number").value;

	if(number > 100 || number < 0)
	{
		$("#result").html("please enter a correct integer");
		$("#count").html(count + " guesses");
	}

	else if(against == number)
	{
		count = count + 1;
		$("#result").html("correct!");
		if(count < 6)
		{
			$("#count").html("you did it in less than 6 guesses congratulations you move on to level two!");
			$("#game_2").show();
		}
		else
		{
			$("#retry").show();
			$("#count").html("try again, get under 6 guesses to move on");
		}
	}
	else
	{
		count = count + 1;
		if(number > against)
		{
			$('#result').html("lower");
		}
		else
		{
			$('#result').html("higher");
		}

		$("#count").html(count + " guesses");

	}

	if(count < 6 && number == against)
	{
		$("#game_2").show();
	}
}


function adding(){
	//add two numbers and see if you get the right answer

}

function theCountdown(s_time){
	$("#countdown").html(s_time);

	setTimeout(function() {
		if(s_time > 0)
		{
			s_time = s_time - 1;
			theCountdown(s_time);
		}
		else
		{
			$("#countdown").html("you took to long, press restart button to try again");
			$("#restart").show();

		}
	},1000);
}

function changeNumbers(){

}

function restart(){
	var randomnumber = Math.floor(Math.random()*1000);
	$("#num1").html(randomnumber);
	var randomnumber = Math.floor(Math.random()*1000);
	$("#num2").html(randomnumber);
	theCountdown(5);
	$("#restart").hide();
}

