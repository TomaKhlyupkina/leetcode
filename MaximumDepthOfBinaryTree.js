class TreeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

let node_10 = new TreeNode(10, null, null)
let node_3 = new TreeNode(3, null, null)
let node_5 = new TreeNode(5, null, null)
let node_6 = new TreeNode(6, null, null)
let node_7 = new TreeNode(7, null, null)

node_10.left = node_3
node_10.right = node_6
node_3.left = node_5
node_6.left = node_7

let maxDepth = function(root) {
    if (!root) return 0
    let maxDepthValue = 0
    function countDepth(root, currentDepth = 1) {
        if (currentDepth > maxDepthValue) {
            maxDepthValue = currentDepth
        }
        if (root.left) {
            countDepth(root.left, currentDepth + 1)
        }
        if (root.right) {
            countDepth(root.right, currentDepth + 1)
        }
    }
    countDepth(root)
    return maxDepthValue
};

console.log(maxDepth(node_10))