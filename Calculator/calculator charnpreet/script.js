var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var zero = document.getElementById("0");

var plus = document.getElementById("plus");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

var num1=0, num2=0;
var check="+";

one.onclick=function(){
	num2 = (num2*10)+1;
	document.getElementById("result").innerHTML=num2;
}

two.onclick=function(){
	num2 = (num2*10)+2;
	document.getElementById("result").innerHTML=num2;
}

three.onclick=function(){
	num2 = (num2*10)+3;
	document.getElementById("result").innerHTML=num2;
}

four.onclick=function(){
	num2 = (num2*10)+4;
	document.getElementById("result").innerHTML=num2;
}

five.onclick=function(){
	num2 = (num2*10)+5;
	document.getElementById("result").innerHTML=num2;
}

six.onclick=function(){
	num2 = (num2*10)+6;
	document.getElementById("result").innerHTML=num2;
}

seven.onclick=function(){
	num2 = (num2*10)+7;
	document.getElementById("result").innerHTML=num2;
}

eight.onclick=function(){
	num2 = (num2*10)+8;
	document.getElementById("result").innerHTML=num2;
}

nine.onclick=function(){
	num2 = (num2*10)+9;
	document.getElementById("result").innerHTML=num2;
}

zero.onclick=function(){
	num2 = (num2*10)+0;
	document.getElementById("result").innerHTML=num2;
}

plus.onclick=function(){
	check="+";
	if(num1!=0) num1 = num1 + num2;
	else {
		num1 = num2;
	}
	num2=0;
	document.getElementById("result").innerHTML=num1;
}

subtract.onclick=function(){
	check="-";
	if(num1!=0) num1 = num1-num2;
	else num1 = num2;
	num2=0;
	document.getElementById("result").innerHTML=num1;

}

multiply.onclick=function(){
	check="*";
	if(num1!=0) num1 = num1 * num2;
	else num1 = num2;
	num2=0;
	document.getElementById("result").innerHTML=num1;
}

divide.onclick=function(){
	check="/";
	if(num1!=0) num1 = num1/num2;
	else num1=num2;
	num2=0;
	document.getElementById("result").innerHTML=num1;
}

equal.onclick=function(){
	if(check=="+"){
		num1 = num1 + num2;
	}
	if(check=="-"){
		num1 = num1 - num2;
	}
	if(check=="/"){
		num1 = num1/num2;
	}
	if(check=="*"){
		num1 = num1 * num2;
	}
	num2=0;
	document.getElementById("result").innerHTML=num1;
	num1=0;
}

