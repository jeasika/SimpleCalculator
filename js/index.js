/*
      A simple calculator
      Author: Jeasika Lopez
      Number: A00828173
      Date: 03/12/2020

*/


//Plus operation
plusButton = document.getElementById("addButton");
plusOperation = function(){
  alert("Plus Clicked");
}

//console.log(plusButton);
plusButton.addEventListener("click", plusOperation);
