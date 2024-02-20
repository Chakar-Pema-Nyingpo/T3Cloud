function removeVowels(words) {
    var vowels = ["a", "e", "i", "o", "u"];
    var result = [];
    var x = words.toLowerCase().split("");

    for (var i = 0; i < x.length; i++) {
        if (!vowels.includes(x[i])) {
            result.push(x[i]);
        }
    }

    return result.join("");
}

console.log(removeVowels("Hello"));


// Input:
// 	- "11010111011101110001101010110100"
// 	- 4

// 	Output:
// 	["1101", "0111", "0111", "0111", "0001", "1010", "1011", "0100"]

// 	If the string is not divisible by the chunk integer, simply chunk the remainder together.

// 	Input:
// 	- "10101010"
// 	- 6
	
// 	Output:
// 	["101010", "10"]

// function splitBinaryChunks(binaryString, chunkSize){
//     var chunks = [];
//     for (let i = 0; i < binaryString.length; i++){
//         currentChunk += binaryString[i];
//         if ((i+1) % chunkSize === 0 || i === binaryString.length - 1) {
//             chunks.push(currentChunk);
//             currentChunk = "";
//         }
//     }
// }

// return chunks;

// let input1 = "11010111011101110001101010110100"

