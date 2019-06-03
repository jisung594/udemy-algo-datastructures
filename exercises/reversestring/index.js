// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// function reverse(str) {
//   debugger
//   return str.split("").reduce((reversed,char) => {
//     // "reversed" => accumulator
//     // "char" => current value (each element in array)
//     return char + reversed
//   }, "")
//   // the "" is what the accumulator ("reversed") is initialized as
//   // ** in other words, the "reversed" starts as an empty string --
//   // before "char" is added to it
// }

reverse('jonathan')


// --- EXAMPLE OF REDUCE METHOD FOR AN ARRAY OF NUMBERS ---
// function reverse(numArr) {
//  return numArr.reduce((sum,num)=>{
//    return sum + num
//  }, -5)
// }
//
// reverse([4,4,4])
// --- WILL RETURN 7 ---
// --> initialized at -5
// --> sum of given array is 12
// --> result is 7 (-5 + 12)


module.exports = reverse;

// -- USING JAVASCRIPT BUILT-IN METHODS ---
// function reverse(str) {
//   return str.split("").reverse().join("")
// }


// --- USING FOR LOOP (DON'T USE THIS TYPE OF CLASSIC SYNTAX)---
// function reverse(str) {
//   let i;
//   let reversed = "";
//
//   for (i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed
// }


// --- USING FOR LOOP (CORRECTLY)
function reverse(str) {
  let reversed = ""

  for (let char of str) {
    reversed = char + reversed
    debugger
    // each character of original string is placed in front of
    // whatever string "reversed" is at the moment
    // hence, the new string is a REVERSED version of the original
  }

  return reversed
}
