"use strict";

class Node {
   constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
   }

   /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

   findRecursively(val) {
      if (this.val === val) return this;
      if (val > this.val) {
         if (this.right === null) {
            return undefined;
         }
         return this.right.findRecursively(val);
      } else {
         if (this.left === null) {
            return undefined;
         }
         return this.left.findRecursively(val);
      }
   }

   /** insertRecursively(val): Starting at the invoking node, insert a new node
    * into the BST with value val. Returns the inserted node. Uses recursion. */

   insertRecursively(val) {
      if (val > this.val) {
         if (this.right === null) {
            this.right = new Node(val);
            return;
         }
         this.right.insertRecursively(val);
      } else {
         if (this.left === null) {
            this.left = new Node(val);
            return;
         }
         this.left.insertRecursively(val)
      }
   }

   /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

   dfsPreOrder() {
      let left = this.left?.dfsPreOrder() || [];
      let right = this.right?.dfsPreOrder() || [];
      return [this.val, ...left, ...right];
   }

   /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

   dfsInOrder() {
      let left = this.left?.dfsInOrder() || [];
      let right = this.right?.dfsInOrder() || [];
      return [...left, this.val, ...right];
   }

   /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

   dfsPostOrder() {
      let left = this.left?.dfsPostOrder() || [];
      let right = this.right?.dfsPostOrder() || [];
      return [...left, ...right, this.val,];
   }

}


class BinarySearchTree {
   constructor(root = null) {
      this.root = root;
   }

   /** insert(val): Insert a new node into the BST with value val.
    * Returns the tree instance. Uses iteration. */

   insert(val) {

      if (this.root === null) {
         this.root = new Node(val);
         return this;
      }

      let currNode = this.root;
      let isContinue = true;

      while (isContinue) {
         if (val > currNode.val) {
            if (currNode.right !== null) {
               currNode = currNode.right;
            } else {
               currNode.right = new Node(val);
               isContinue = false;
            }
         } else {
            if (currNode.left !== null) {
               currNode = currNode.left;
            } else {
               currNode.left = new Node(val);
               isContinue = false;
            }
         }
      }
      return this;
   }

   /** insertRecursively(val): Insert a new node into the BST with value val.
    * Returns the tree instance. Uses recursion. */

   insertRecursively(val) {
      if (this.root === null) {
         this.root = new Node(val);
         return this;
      }

      this.root.insertRecursively(val);
      return this;
   }

   /** find(val): Search the BST for a node with value val.
    * Returns the node, if found; else undefined. Uses iteration. */

   find(val) {
      let current = this.root;

      while (current) {
         if (current.val === val) {
            return current;
         }
         current = (val < current.val) ? current.left : current.right;
      }
   }

   /** findRecursively(val): Search the BST for a node with value val.
    * Returns the node, if found; else undefined. Uses recursion. */

   findRecursively(val) {
      if (this.root === null) return undefined;
      return this.root.findRecursively(val);
   }

   /** dfsPreOrder(): Traverse the BST using pre-order DFS.
    * Returns an array of visited nodes. */

   dfsPreOrder() {
      if (this.root === null) return [];
      return this.root.dfsPreOrder();
   }

   /** dfsInOrder(): Traverse the BST using in-order DFS.
    * Returns an array of visited nodes. */

   dfsInOrder() {
      if (this.root === null) return [];
      return this.root.dfsInOrder();
   }

   /** dfsPostOrder(): Traverse the BST using post-order DFS.
    * Returns an array of visited nodes. */

   dfsPostOrder() {
      if (this.root === null ) return [];
      return this.root.dfsPostOrder();
   }

   /** bfs(): Traverse the BST using BFS.
    * Returns an array of visited nodes. */

   bfs() {
      if (this.root === null ) return [];
      
      let output = [];
      let nodeQueue = [this.root];

      while (nodeQueue.length){
         let current = nodeQueue.shift();
         output.push(current.val);
         if(current.left) nodeQueue.push(current.left);
         if(current.right) nodeQueue.push(current.right);
      }
      return output;

   }

   /** findSuccessorNode(node): Find and return node with next largest value.
    * Returns undefined if no successor. */

   findSuccessorNode(node) {
      if(node.right === null) return undefined;
      
      let current = node.right;
      console.log("what is current", current);
      while (current.left !== null){
         current = current.left;
      }
      console.log("got here, current is: ", current);
      return current;
   }

   /** Further Study!
    * remove(val): Removes a node in the BST with the value val.
    * Returns the removed node. */

   remove(val) {

   }
}

module.exports = {
   BinarySearchTree,
   Node,
};
