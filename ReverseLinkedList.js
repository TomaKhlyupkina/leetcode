class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next)
    }
}

let reverseList = function(head) {
    let listValues = []
    let list = null
    for (let node = head; node != null; node = node.next) {
        listValues.push(node.val)
    }
    for (let i = 0; i < listValues.length; i++) {
        list = new ListNode(listValues[i], list)
    }
    return list
};

let node3 = new ListNode(3, null)
let node2 = new ListNode(2, node3)
let node1 = new ListNode(1, node2)

console.log(reverseList(node1))