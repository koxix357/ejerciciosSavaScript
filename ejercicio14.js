function repeatCounter(list) {
    let count = {}; 
  
    
    for (let i = 0; i < list.length; i++) {
      let word = list[i];
  
      
      if (count[word]) {
        count[word]++;
      } else {
        
        count[word] = 1;
      }
    }
  
    
    return count;
  }
  
  const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  console.log(repeatCounter(words)); 
  