// // var result = "Tom is at his computer.".split("")
// // const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

// // function checkUsername(username) {
// // 	var isUserNameOk = true

// // 	for (var i = 0; i < restrictedWords.length; i += 1) {
// // 		var includesRestrictedWord = username.includes(restrictedWords[i])
// // 		if (includesRestrictedWord) {
// // 			isUserNameOk = false
// // 		}
// // 	}

// // 	return isUserNameOk
// // }

// // console.log(checkUsername("mike45")) // true
// // console.log(checkUsername("apple45")) // false
// var names = "john james jones"
// var splitIntoWords = names.split(" ")

// for (var i = 0; i < splitIntoWords.length; i += 1) {
// 	var currentWord = splitIntoWords[i]
// 	var lettersOfCurrentWord = currentWord.split("")
// 	var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
// 	lettersOfCurrentWord[0] = capitalizedLetter
// 	var capitalizedWord = lettersOfCurrentWord.join("")
// 	splitIntoWords[i] = capitalizedWord
// }
// const capitalizedName = splitIntoWords.join(" ")
// console.log(capitalizedName)

// var sentence = " Hello how are you today";
// var splitWords = sentence.split(" ")

// let largestWord = " ";

// let smallestWord = " i ";

// for (var i = 0; i < splitWords.length; i++) {
//     if (splitWords[i].length > largestWord.length){
//         largestWord = splitWords [i]
//     }

//         if (splitWords[i].length < smallestWord.length) {
//             smallestWord = splitWords [i]
//         }
        
//     }
//     console.log(largestWord)
//     console.log(smallestWord)
    

// function getCentury(year) {
//     // let century = (year / 100);
//     var century = (year / 100)

//     var  

// }

// let year = 2022;
// let century = getCentury(year);
// console.log(year + " is in the " + century + " century.");

// function getLiters(ml){
//     return (ml /1000)
// }
// let liters = 15
// console.log(ml+ "is" + liters )

var counter =(0)
function checkVowels(words) {
    
    	for (var i = 0; i < words.length; i += 1) {
            if ("aeiou".includes(words [i])) {
                counter++
            }

        }
    
    	return counter 
    }
    console.log(checkVowels("fuck yo tobdenG"))