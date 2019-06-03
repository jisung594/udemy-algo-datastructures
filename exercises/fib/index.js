// --- Directions
// Print out the n-th entry in the fibonacci series.

// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.

// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let seq = [0,1]

  while (seq.length <= n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2])
  }

  return seq[n]
}

module.exports = fib;
