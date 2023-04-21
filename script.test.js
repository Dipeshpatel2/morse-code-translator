import{englishToMorse} from "./script.js"

describe("testing english to morse function", () =>{
 it("should return morse code character to english when a single string is given", () =>{
    const string = englishToMorse("a")
    expect(string).toBe(".-")
 })
 it("should return word in morse code when given english word", () =>{
    const string = englishToMorse("dipesh")
    expect(string).toBe("-.. .. .--. . ... ....")
 })
 //test for numbers
it("should return number in morse code when given the integer", () =>{
    const number = englishToMorse("9")
    expect(number).toBe("----.") 
})
//test for spaces between words
it("should convert sentence to morse code with spaces", () =>{
    const sentence = englishToMorse("This is a test")
    expect(sentence).toBe("- .... .. ... / .. ... / .- / - . ... -")
})
//test for forbidden characters
it("should return empty string when given forbidden characters", () =>{
    const forbidden = englishToMorse("é")
    expect(forbidden).toBe("")
})
it("should convert sentence to morse code with punctuation", () =>{
    const sentence = englishToMorse("Hello, World!")
    expect(sentence).toBe(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")
})
it("should convert sentence to morse code with upper and lower case letters", () =>{
    const sentence = englishToMorse("Hello World")
    expect(sentence).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
})
it("should translate numbers, full stops and question marks", () => {
    const result = englishToMorse(
      "how old are you? 38.",
    );
    expect(result).toBe(".... --- .-- / --- .-.. -.. / .- .-. . / -.-- --- ..- ..--.. / ...-- ---.. .-.-.-")
})
})
