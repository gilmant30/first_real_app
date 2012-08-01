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
		}
		else
			$("#count").html("try again, get under 6 guesses to move on");
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
		//do something
	}
}