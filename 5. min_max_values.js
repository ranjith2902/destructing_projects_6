function findMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }
  
  // Example usage:
  const arr = [5, 2, 7, 1, 9];
  const result = findMaxMin(arr);
  console.log(result); // { max: 9, min: 1 }
  