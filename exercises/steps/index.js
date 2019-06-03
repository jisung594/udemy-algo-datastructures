// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // MY SOLUTION
// function steps(n) {
//   for (i = 1; i <= n; i++) {
//     let hash = "#"
//     let space = " "
//     console.log(hash.repeat(i) + space.repeat(n-i));
//   }
// }

// UDEMY SOLUTION
function steps(n) {
 for (let row = 0; row <= n; row++) {
   console.log("hi")
 }
}




module.exports = steps;
