var value, firstNum, secondNum, operator;
var tempVal, newVal; 
var isFirstNum = true; 
var isMultiDigit = true;  
var mathOps = ["+", "-", "*", "/", "=", "c"]; 

var main = function(){

	// Listen for button clicks and choose appropriate action
	$(":button").click(function(){

		var button = $(this); 
		
		// Check to see if the button pressed was not a mathematical operator or clear
		if(mathOps.indexOf($(this).val()) == -1){
			if(isMultiDigit == true){
				console.log("Entering addDigit"); 
				addDigit(button); 
			}
			else{
				tempVal = $("#display").val(); 
				newVal = tempVal + $(this).val(); 
				$("#display").val(newVal);
			}
		}
		// Check if the button was the clear button
		else if($(this).val() == "c"){
			clear(); 
		}
		else if($(this).val() == "="){
			secondNum = Number(newVal);
			value = calculate(firstNum, secondNum, operator);
			firstNum = value; 
			value = value + "";
			console.log("Value = " + value); 
			$("#display").val(value);
		}
		// Math operator button was pressed
		else{
			if(isFirstNum == true){
				firstNum = Number($("#display").val()); 
			}
			newVal = 0; 
			$("#display").val("");
			operator = $(this).val();
			isFirstNum = false; 
		}

		console.log("first num = "+firstNum); 
		console.log("second num = "+secondNum); 
	});

	$("body").css("background-color", "blue");
}

// add a digit to the display
function addDigit(btn){
	console.log("inside add digit");
	tempVal = $("#display").val();
	newVal = btn.val(); 
	$("#display").val(tempVal + newVal);
	console.log("Exiting add digit");
}

// Clear display and reset values
function clear(){
	$("#display").val(""); 
	firstNum = 0; 
	secondNum = 0; 
	isFirstNum = true; 
	isMultiDigit = true; 
}

// calculate the value of the mathematical functin
function calculate(firstNum, secondNum, operator){
	var val; 

	if(operator == "+")
		val = firstNum + secondNum; 
	else if(operator == "-")
		val = firstNum - secondNum; 
	else if(operator == "*")
		val =  firstNum * secondNum; 
	else if(operator == "/")
		val = firstNum / secondNum; 
	

	return val; 
}

$(document).ready(main);