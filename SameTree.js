class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

//Низходящая рекурсия - выполнить действие и запустить рекурсию,
// восходящая - наоборот (запустить рекурсию, потом действие)

//Solution №1
// function treeTraversal(root) {
//     let treeValues = []
//     if (!root) {
//         return treeValues
//     }
//     function treeTraversalRecursive(root) {
//         treeValues.push(root.val)
//         if (root.left) {
//             treeTraversalRecursive(root.left)
//         }
//         if (!root.left && root.right) {
//             treeValues.push(null)
//         }
//         if (root.right) {
//             treeTraversalRecursive(root.right)
//         }
//     }
//     treeTraversalRecursive(root)
//     return treeValues
// }
//
// let isSameTree = function(lhs, rhs) {
//     let lhsValues = treeTraversal(lhs)
//     let rhsValues = treeTraversal(rhs)
//
//     if (lhsValues.length !== rhsValues.length) {
//         return false
//     }
//
//     for (let i = 0; i < lhsValues.length; i++) {
//         if (lhsValues[i] !== rhsValues[i]) {
//             return false
//         }
//     }
//     return true
// };

//Solution №2
function isSameTree(lhsRoot, rhsRoot) {
    if (!lhsRoot && !rhsRoot) {
        return true
    }

    if (!lhsRoot || !rhsRoot) {
        return false
    }

    if (lhsRoot.val !== rhsRoot.val) {
        return false
    }

    return isSameTree(lhsRoot.left, rhsRoot.left) &&
           isSameTree(lhsRoot.right, rhsRoot.right)
}

let tree1Node5 = new TreeNode(5)
let tree1Node4 = new TreeNode(4)
let tree1Node3 = new TreeNode(3, tree1Node5)
let tree1Node2 = new TreeNode(2, tree1Node4)
let tree1Node1 = new TreeNode(1, tree1Node2, tree1Node3)

let tree2Node5 = new TreeNode(5)
let tree2Node4 = new TreeNode(4)
let tree2Node3 = new TreeNode(3, tree2Node5)
let tree2Node2 = new TreeNode(2, tree2Node4)
let tree2Node1 = new TreeNode(1, tree2Node2, tree2Node3)

console.log(isSameTree(tree1Node1, tree2Node1))