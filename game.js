const wordList = parseFromFile

var fs = require('fs');
var text = fs.readFileSync("./dictionary.txt", 'utf-8');
var textByLine = text.split('\n')

print(textByLine)

unscrambledWord = ""

//scrambleWord(wordList) {
//    randomWord = pick random word from wordList
//    scrambleWord = randomWordScrammbled
//    unscrambledWord = randomWord
//    return scrambledWord;
//}

