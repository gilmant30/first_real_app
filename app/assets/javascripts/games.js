var count = 0;

function game1begin(){
	$("#game_2").hide();
    $("#retry").hide();
}

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


function game2begin(){
	restart();
	$("#game_3").hide();
}



function adding(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var answer = document.getElementById("answer").value;

	var total = num1 + num2;
	if(answer == total)
	{
		$("#result").html("correct!");
	}
	else
	{
		$("#result").html("Wrong...try again...");
	}

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
			$("#brestart").show();

		}
	},1000);
}

function changeNumbers(){

}

function randomNum1(){
	var randomnumber = Math.floor(Math.random()*1000);
	$("#num1").html(randomnumber);
}

function randomNum2(){
	var randomnumber = Math.floor(Math.random()*1000);
	$("#num2").html(randomnumber);
}


function restart(){
	randomNum1();
	randomNum2();
	theCountdown(10);
	$("#answer").val("");
	$("#result").html("");
	$("#brestart").hide();
}

