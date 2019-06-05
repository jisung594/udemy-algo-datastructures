// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


// PROBLEM INVOLVING **BREATH-FIRST TRAVERSAL**
function levelWidth(root) {
  const arr = [root, "stopper"]
  const counters = [0]

  // we only want to run this process while there are any nodes in our array
  // as long as there are any nodes in arr, arr will always contain "stopper"
  // so arr.length is always be greater than 1
  while (arr.length > 1) {
    const node = arr.shift()

    if (node === "stopper") {
      counters.push(0)
      // if the iteration is at "stopper"
      // we then need to set a new counter for the next row
      arr.push("stopper")
      // putting "stopper" back into array
    } else {
      arr.push(...node.children)
      // when the iteration is at an actual node, push its children into array
      counters[counters.length - 1]++
      // last element in counters array is the current level of tree
      console.log(counters[counters.length - 1])
    }
  }
}

module.exports = levelWidth;
