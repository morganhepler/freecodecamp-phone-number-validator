const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

// Check if input is a valid US Phone Number
const isNumberValid = (number) => {
  const regex = /^1?\s*(?:\(([0-9]{3})\)|([0-9]{3}))[-\s]*([0-9]{3})[-\s]*([0-9]{4})$/;
  if (regex.test(number) === true) {
    return `<p class="green">Valid US number:<br>${number}<p><br>`;
  }
  else {
    return `<p class="pink">Invalid US number:<br>${number}<p><br>`;
  }
}

// Clear displayed results
const clearResults = () => {
  userInput.value = "";
  results.textContent = "";
}

// Check if value has been entered by user
const hasValue = () => {
  const input = userInput.value;
  if (!input) {
    alert("Please provide a phone number");
  }
  else {
    // Display results
    results.innerHTML += isNumberValid(input);
    userInput.value = "";
  }
}

checkBtn.addEventListener("click", hasValue);
clearBtn.addEventListener("click", clearResults);