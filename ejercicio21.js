const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
  
  
  let minors = [];
  let adults = [];
  
  for (let user of users) {
    if (user.years < 18) {
      minors.push(user.name); 
    } else {
      adults.push(user.name); 
    }
  }
  
  console.log("Usuarios menores de edad:");
  minors.forEach(minor => console.log(minor)); 
  
  console.log("Usuarios mayores de edad:");
  adults.forEach(adult => console.log(adult)); 
  