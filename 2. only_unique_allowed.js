function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
  
  const numbers = [1, 2, 3, 2, 4, 3];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4]
