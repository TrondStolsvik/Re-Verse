//Get the string from the input on the page
function getString() {
  //First clear the content of the page
  document.getElementById("results").innerHTML = "";

  document.getElementById("results").classList.add("invisible");

  //Declare a variable to hold the string
  let stringInput = document.getElementById("stringInput").value;

  let reversedString = revString(stringInput);

  displayString(reversedString);
}

//Reverse the string
function revString(stringInput) {
  //Declare an empty variable as a string
  let reversedString = [];

  //For-loop through the string from the end
  for (let i = stringInput.length - 1; i >= 0; i--) {
    //Concatenate the result of each iteration to the empty array
    reversedString += stringInput[i];
  }
  return reversedString;
}

//Display the reversed string on the page
function displayString(reversedString) {
  document.getElementById("results").classList.remove("invisible");

  document.getElementById(
    "results"
  ).innerHTML = `Your string reversed is: ${reversedString}`;
}
