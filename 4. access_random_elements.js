function extractElements(arr) {
    const [first, second, ...rest] = arr;  // using rest operator to capture the remaining elements
    const last = rest.pop();  // extracting the last element from the remaining elements
    
    return [first, second, last];
  }
  const arr = [1, 2, 3, 4, 5];
  const result = extractElements(arr);  // [1, 2, 5]

  console.log(result);
    