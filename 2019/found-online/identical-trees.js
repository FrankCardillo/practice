// Write an efficient algorithm to check if two binary trees are identical or not.
// i.e. if they have identical structure & their contents are also the same

function Node(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
}

function isIdentical(treeOneNode, treeTwoNode) {
    if (treeOneNode === null && treeTwoNode === null) {
        return;
    }    

    // if both trees are non-empty and value of their root node matches,
    // recurse for their left and right sub-tree
    if (treeOneNode === treeTwoNode) {
        isIdentical(treeOneNode.left, treeTwoNode.left);
        isIdentical(treeOneNode.right, treeTwoNode.right);
    } else {
        return false;
    }
}