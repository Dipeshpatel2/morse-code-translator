import { englishToMorseAlphabet } from "./data.js";

export const englishToMorse = (string) => {
  const input = string.toUpperCase();
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const character = input.charAt(i);
    if (englishToMorseAlphabet.hasOwnProperty(character)) {
      output += englishToMorseAlphabet[character]+ " ";
    }
  }
  return output.trim()
}
  