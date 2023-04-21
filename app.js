// import { englishToMorse } from "./script.js";

const morseAlphabet = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.",
    "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.",
    "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-",
    "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----."
  };
  
  // Query selectors
  const inputBox = document.querySelector("#inputBox");
  const outputBox = document.querySelector("#outputBox");
  
  // Add an event listener to the Translate button
  document.querySelector(".translateEnglishToMorse").addEventListener("click", () => {
    //input text and convert to uppercase
    const englishText = inputBox.value.toUpperCase();
    
    // Translate each character in the input text to Morse code
    const morseCode = englishText.split("").map((char) => {
      // Return the Morse code equivalent of the character if it exists in the alphabet
      // Otherwise, return an empty string
      return morseAlphabet[char] || "";
    }).join(" ");
    
    // Set the output text to the Morse code
    outputBox.value = morseCode;
  });
  

//query selectors

// const inputEnglish = document.querySelectorAll("#inputBox").value.toLowerCase();
// const englishToMorseButton = document.querySelector(".translateEnglishToMorse")

// //event listeners
// inputEnglish.addEventListener
// englishToMorseButton.addEventListener("click", handleEnglishToMorse);
// //handle input function-this funtion will call the english to morse function 

// const handleEnglishToMorse = () =>{

// }