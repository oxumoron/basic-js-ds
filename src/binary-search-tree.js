const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (current) {
      if (data === current.data) return undefined;

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;

          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }

        current = current.right;
      }
    }
  }

  has(data) {
    if (!this.root) return null;

    let current = this.root;

    const rnLoop = true;

    while (rnLoop) {
      if (!current) return false;

      if (data === current.data) return true;

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return null;

    return found;
  }

  remove(data) {
    if (data === null) {
      return data;
    }
  }

  minData(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minData(root.left);
    }
  }

  min() {
    let node;

    if (this.root) {
      node = this.root;

      while (node.left !== null) {
        node = node.left;
      }

      return node.data;
    }
  }

  max() {
    let node;

    if (this.root) {
      node = this.root;

      while (node.right !== null) {
        node = node.right;
      }

      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
