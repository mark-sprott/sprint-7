//Minimum exercise//

function min(one, two) {
 if (one < two)
 return one;
 else
 return two;
}

//**Recursion**//

function isEven(number){
  if (number == 1)
  return false;
  else if (number == 0)
  return true;
  else
  return isEven(number -2)
}

//***Bean counting***//

function countBs(str){
  var string = str.match(/B/g).length;
  return string;
}

console.log(countBs("BBC"));

function countChar(str, char){
  var count = 0;
  for (var i=0; i<str.length; i++)
    if (str.charAt(i) == char)
    count++;
  return count;
}
function countBs(str){
  return countChar(str, "B");
}

console.log(countBs("BBBC"));
console.log(countChar("kakkkkkkerlak", "k"));
