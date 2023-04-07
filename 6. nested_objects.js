function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  const person = {
    name: "Ranjith",
    age: 27,
    address: {
      street: "123 Main St",
      city: "Chennai",
      state: "Tamilnadu",
      zip: "627001"
    },
    
  };

  const { name, street } = extractNameAndStreet(person);
console.log(name);    // Ranjith
console.log(street);  // 123 Main St

  