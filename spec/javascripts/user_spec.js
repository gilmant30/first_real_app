describe("game 1", function() { 
	beforeEach(function() {
  		loadFixtures("game1.html");
	});

	describe("result", function() {
		
		it("should be a div", function() {
			expect($("#result")).toBe('div');
		});

		it("should be empty initially", function() {
			expect($("#result")).toHaveText("");
		})
	})

	describe("count", function() {

		it("should be a div", function() {
			expect($("#count")).toBe('div');
		});

		it("should be empty initially", function() {
			expect($("#count")).toHaveText("");
		});
	});

	describe("number", function() {

		it("should be empty initially", function() {
			expect($("#number")).toHaveText("");
		});

	});


	describe("guess with invalid number", function() {

		it("should have input value of -10", function() {
			$("#number").val("-10");
			expect($("#number")).toHaveValue("-10");
		});

		it("should have result saying please enter a correct integer and count saying 0 guesses", function() {
			game1begin();
			$("#number").val("-10");
			guessNumber(30);
			expect($("#result")).toHaveText("please enter a correct integer");
			expect($("#count")).toHaveText("0 guesses");
			expect($("#game_2")).toBeHidden();
		})
	});

	describe("guess with invalid number", function() {

		it("should have input value of 150", function() {
			$("#number").val("150");
			expect($("#number")).toHaveValue("150");
		});

		it("should have result saying please enter a correct integer and count saying 0 guesses", function() {
			$("#number").val("150");
			guessNumber(30);
			expect($("#result")).toHaveText("please enter a correct integer");
			expect($("#count")).toHaveText("0 guesses");
		})
	});

	describe("guess number 1", function() {

		it("should have input value of 50", function() {
			$("#number").val("50"); 
			expect($("#number")).toHaveValue("50");
		});

		it("should have result saying lower and count saying 1 guesses", function() {
			$("#number").val("50"); 
			guessNumber(30);
			expect($("#result")).toHaveText("lower");
			expect($("#count")).toHaveText("1 guesses");
		});

	});

	describe("guess number 2", function() {

		it("should have input value of 10", function() {
			$("#number").val("10");
			expect($("#number")).toHaveValue("10");
		});

		it("should have result saying higher and count saying 2 guesses", function() {
			$("#number").val("10");
			guessNumber(30);
			expect($("#result")).toHaveText("higher");
			expect($("#count")).toHaveText("2 guesses");
		});
	});


	describe("guess number 3", function() {

		it("should have input value of 10", function() {
			$("#number").val("40");
			expect($("#number")).toHaveValue("40");
		});

		it("should have result saying higher and count saying 3 guesses", function() {
			$("#number").val("40");
			guessNumber(30);
			expect($("#result")).toHaveText("lower");
			expect($("#count")).toHaveText("3 guesses");
		});
	});

	describe("guess number 4", function() {
		
		it("should have input value of 26", function() {
			$("#number").val("26");
			expect($("#number")).toHaveValue("26");
		});

		it("should have result saying higher and count saying 4 guesses", function() {
			$("#number").val("26");
			guessNumber(30);
			expect($("#result")).toHaveText("higher");
			expect($("#count")).toHaveText("4 guesses");
		});

	});

	describe("guess number 5", function() {

		it("should have input value of 30", function() {
			$("#number").val("30");
			expect($("#number")).toHaveValue("30");
		});

		it("should have result saying correct and count saying you did it in less than 6 guesses congratulations you move on to level two!", function() {
			game1begin();
			$("#number").val("30");
			guessNumber(30);
			expect($("#result")).toHaveText("correct!");
			expect($("#count")).toHaveText("you did it in less than 6 guesses congratulations you move on to level two!");
			expect($("#game_2")).toBeVisible()
		});
	});

	describe("guess number 6", function() {

		it("should have input value of 30", function() {
			$("#number").val("30");
			expect($("#number")).toHaveValue("30");
		});

		it("should have result saying correct and count saying try again, get under 6 guesses to move on", function() {
			game1begin();
			$("#number").val("30");
			guessNumber(30);
			expect($("#result")).toHaveText("correct!");
			expect($("#count")).toHaveText("try again, get under 6 guesses to move on");
			expect($("#game_2")).toBeHidden();
			expect($("#retry")).toBeVisible();
		});
	});

});

describe("game 2", function() {
	beforeEach(function() {
  		loadFixtures("game2.html");
	});

	describe("game 2 layout", function() {
		it("should have div with id num1 and should start empty", function() {
			expect($("#num1")).toBe('div');
			expect($("#num1")).toHaveText("");
		});

		it("should have div with id num2 and should start empty", function() {
			expect($("#num2")).toBe('div');
			expect($("#num2")).toHaveText("");
		});

		it("should have input box with id answer and be initially empty", function() {
			expect($("#answer")).toHaveText("");
		});

		it("should have div with id countdown and be initially empty", function() {
			expect($("#countdown")).toBe('div');
			expect($("#countdown")).toHaveText("");
		});	

		it("should have a button with id brestart", function() {

		});
	});

	describe("after initial load", function() {

		it("num1 and num2 should not be empty", function() {
			game2begin();
			expect($("#num1")).not.toHaveText("");
			expect($("#num2")).not.toHaveText("");
		});

		it("should have submit button with id of brestart be hidden", function() {
			game2begin();
			expect($("#brestart")).toBeHidden();
		});

		it("should have a link with id of game_3 be hidden", function() {
			game2begin();
			expect($("#game_3")).toBeHidden();
		});

		it("should have id of countdown with 5", function() {
			game2begin();
			expect($("#countdown")).toHaveText("10");
		});

		it("should have a number in div with id num1", function() {
			game2begin();
			expect($("#num1")).not.toHaveText("");
		});

		it("should have a number in div with id num2", function() {
			game2begin();
			expect($("#num2")).not.toHaveText("");
		});
	
	});

	describe("after guessing once", function() {

		it("and value doesn't equal the sum of both, put wrong in div with id result", function(){
			$("#num1").html("131");
			$("#num2").html("22");
			$("#answer").val("3");
			adding();
			expect($("#result")).toHaveText("Wrong...try again...");
		});
	});

	describe("after time runs out", function() {

		it("should have countdown with text you took to long, press restart button to try again", function() {
			theCountdown(0);

			waits(1100);

			runs(function() { 
				expect($("#countdown")).toHaveText("you took to long, press restart button to try again");
			});
		});

		it("should have add button be hidden", function() {
			theCountdown(0);

			waits(1100);

			runs(function() { 
				expect($("#add")).toBeHidden();
			});
		});

		it("should have add button be hidden", function() {
			theCountdown(0);

			waits(1100);

			runs(function() { 
				expect($("#brestart")).toBeVisible();
			});
		});

	});

	describe("after guessing right", function() {

		it("div with id result should say correct!", function() {
			$("#num1").html("150");
			$("#num2").html("235");
			$("#answer").val("385");
			adding();
			expect($("#result")).toHaveText("correct!");
		});

		it("should have countdown have text proceed to game 3", function() {
			$("#num1").html("150");
			$("#num2").html("235");
			$("#answer").val("385");
			adding();
			expect($("#countdown")).toHaveText("proceed to game 3");
		});

		it("should have link to game 3 showing", function() {
			$("#num1").html("150");
			$("#num2").html("235");
			$("#answer").val("385");
			adding();
			expect($("#game_3")).toBeVisible();
		});
	});

});

describe("game 3", function() {
	beforeEach(function() {
  		loadFixtures("game3.html");
	});

	describe("on initial load", function() {

		it("should have a head with text game 3", function() {
			expect($("h1")).toHaveText("game 3");
		});
	});

});