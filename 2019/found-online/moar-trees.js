// Implement a depth first search algorithm recursively.

function Node(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
}

function depthFirstSearch(node, target) {
    if (node === null) {
        return false;
    }
    if (node.key === target) {
        return true;
    }
    return depthFirstSearch(node.left, target) || depthFirstSearch(node.right, target);
}



// Write a search method for a binary search tree. Have it take the root node and a target value and return 
// whether that target exists in the tree.

function binarySearch(node, target) {
    const current = node;
 
    while (current !== null) {
	    if (current.key > target.key) {
            current = current.left;
        } else if (current.key < target.key) {
            current = current.right;
        } else {
	        return true;
        }
    }
    return false;
}



// Given two values that already exist in a binary search tree, find the lowest common ancestor.

function lowestCommonAncestor(node, one, two) {
    // Check if one and two are in the root tree.
    while (node !== null) {
        if (node.key < one.key && node.key < two.key) {
            node = node.right;
        }
        else if (node.key > one.key && node.key > two.key) {
            node = node.left;
        }
        else {
            return node;
        }
    }
    return null;
}
