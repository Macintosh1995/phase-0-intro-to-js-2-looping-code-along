function writeCards(names, happy = "happy") {
    let card = [];
  
    for (let i = 0; i < names.length; i++) {
      card.push(`Thank you, ${names[i]}, for the wonderful ${happy} gift!`);
    }
    console.log(card);
    return card;
  }
  
  
  function countDown(number){
      let x =0
      while (number >= x) {
          console.log(number);
          number--;
          
      }
  
  }
  
  countDown(10);
