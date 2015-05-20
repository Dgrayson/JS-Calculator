var main = function(){

	var value, firstNum, secondNum, operator;
	var isFirstNum = true;  

	$(":button").click(function(){
		
		if($(this).val() != "=" && $(this).val() != "c"){
			
			if(isFirstNum == true){
				firstNum = Number($(this).val()); 
				isFirstNum = false; 
				$("#display").val($(this).val());
			}
			else if($(this).val() == "+" || $(this).val() == "-" || $(this).val() == "*" || $(this).val() == "/"){
				operator = $(this).val(); 
			}
			else{
				secondNum = Number($(this).val()); 
				$("#display").val($(this).val())
			}
			/*value = $(this).val(); 
			var oldVal = $("#display").val();

			console.log(value);
			$("#display").val(oldVal + value);*/
		}
		else if($(this).val() == "c"){
			$("#display").val(" "); 
			firstNum = 0; 
			secondNum = 0; 
			isFirstNum = true; 
		}
		else{
			value = calculate(firstNum, secondNum, operator);
			firstNum = value; 
			value = value + "";
			console.log("Value = " + value); 
			$("#display").val(value);
		}
	});

	$("body").css("background-color", "blue");
}

function calculate(firstNum, secondNum, operator){
	var val; 

	if(operator == "+")
	{
		val = firstNum + secondNum; 
	}
	else if(operator == "-")
	{
		val = firstNum - secondNum; 
	}
	else if(operator == "*"){
		val =  firstNum * secondNum; 
	}
	else if(operator == "/")
	{
		val = firstNum / secondNum; 
	}

	return val; 
}

$(document).ready(main);