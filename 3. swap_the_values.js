function swapValues(x, y) {
    [x, y] = [y, x]; // Destructure and swap values within an array
    return [x, y]; // Return an array with swapped values
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  [x, y] = swapValues(x, y);
  console.log(`x = ${x}, y = ${y}`); // Output: x = 10, y = 5
  