function reverseArrayInPlace(array){
  for(var i = 0; i < array.length; i++){
  array.splice(i,0,array.pop());
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
