const HashTable = require('../hashtable/hashtable');

module.exports=function insetTree(t1,t2){

  const outputTree1 = t1.preOrder();
  const outputTree2 = t2.preOrder();
  const resultArr=[];
  const newTable = new HashTable(outputTree1.length+outputTree2.length);
  for (let i = 0; i < outputTree1.length; i++) {
    let key = outputTree1[i].toString();
    let value =outputTree1[i];
    if (!newTable.contains(key)){
      newTable.set(key,value);
    }

  }
  for (let i = 0; i < outputTree2.length; i++) {
    let key = outputTree2[i].toString();
    let value =outputTree2[i];
    if(newTable.get(key)===value) {
      resultArr.push(newTable.get(key));}
  }
  return resultArr.length?resultArr:'No matches';
};
