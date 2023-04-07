function countWords(str) {
    // Create an empty Map object to store the word count
    let wordCount = new Map();
  
    // Split the input string into an array of words
    let words = str.split(" ");
  
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Get the current word
      let word = words[i];
  
      // If the word is already in the Map, increment its count
      if (wordCount.has(word)) {
        let count = wordCount.get(word);
        wordCount.set(word, count + 1);
      }
      // Otherwise, add the word to the Map with a count of 1
      else {
        wordCount.set(word, 1);
      }
    }
  
    // Return the Map containing the word count
    return wordCount;
  }

  let str = "the quick brown fox jumps over the lazy dog";
let result = countWords(str);
console.log(result); // Output: Map(8) {"the" => 2, "quick" => 1, "brown" => 1, "fox" => 1, "jumps" => 1, "over" => 1, "lazy" => 1, "dog" => 1}



  