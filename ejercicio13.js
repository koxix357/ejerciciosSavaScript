function nameFinder(nameList, name) {
    const index = nameList.indexOf(name); 
  
    if (index !== -1) { 
      return {found: true, position: index}; 
    } else {
      return {found: false}; 
    }
  }
  
  const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  console.log(nameFinder(names, 'Logan')); 
  console.log(nameFinder(names, 'Alex')); 
  