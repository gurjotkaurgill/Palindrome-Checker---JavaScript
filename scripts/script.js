const checkButton = document.getElementById("check-btn");
const resultArea = document.getElementById("result");
const textInput = document.getElementById("text-input");

function checkPalindrome() {
  const inputText = textInput.value.trim();

  // Check if input is empty
  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned text is a palindrome
  const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

  // Display the appropriate result
  if (isPalindrome) {
    resultArea.innerHTML = `&#9989; "${inputText}" is a palindrome ${String.fromCodePoint(0x1F60A)}`;
    resultArea.classList.remove("invalid");
    resultArea.classList.add("valid");
  } else {
    resultArea.innerHTML = `&#10060; "${inputText}" is not a palindrome ${String.fromCodePoint(0x1F914)}`;
    resultArea.classList.remove("valid");
    resultArea.classList.add("invalid");
  }
}


checkButton.addEventListener("click", checkPalindrome);

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});
