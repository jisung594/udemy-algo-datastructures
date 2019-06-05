// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    const node = new Node(data)
    this.children.push(node)
  }

  remove(data) {
    // reassigning the children of given node
    // by filtering out the child node whose data property matches argument
    this.children = this.children.filter(childNode => {
      childNode.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(func) {
    const arr = [this.root]

    while (arr.length) {
      // .shift to temporarily take out the first element in arr
      const node = arr.shift()

      // arr.push(node.children) **WRONG**
      // arr.push(...node.children) **ANOTHER CORRECT WAY**
      // cannot push node.children into arr because node.children is already an array
      // and we don't want a nested array DO WE--?!
      for (let child of node.children) {
        arr.push(child)
      }

      func(node)
    }
  }

  traverseDF(func) {
    const arr = [this.root]

    while (arr.length) {
      // takes out first node in arr
      const node = arr.shift()

      // adds children of node to the BEGINNING of arr
      arr.unshift(...node.children)
      func(node)
    }
  }
}

const node1 = new Node("a")
const tree = new Tree()
tree.root = node1

module.exports = { Tree, Node };
