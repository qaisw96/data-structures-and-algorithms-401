const HashTable = require('../hashtable/hashtable');


module.exports=function repeatedWord(inputString){
  const arrOfwords = inputString.match(/\w+/g);

  //   const arrOfwords = inputString.split(' ');
  console.log(arrOfwords);
  const newTable = new HashTable(arrOfwords.length);
  for (let i = 0; i < arrOfwords.length; i++) {
    let key = arrOfwords[i].toLowerCase();
    if (newTable.contains(key)){
      if(newTable.get(key)===key) return newTable.get(key);
    }
    newTable.set(key,key);
  }
  return 'No Repeated Word';
};

