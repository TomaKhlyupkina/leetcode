class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class List {
    firstNode = null;
    lastNode = null;

    constructor(val) {
        this.firstNode = new ListNode(val, null);
        this.lastNode = this.firstNode;
    }

    pushFront(val) {
        let newNode = new ListNode(val, this.firstNode)
        this.firstNode = newNode
    }

    pushBack(val) {
        let newNode = new ListNode(val, null)
        this.lastNode.next = newNode
        this.lastNode = newNode
    }

    print() {
        let printStr = ""
        for (let currentNode = this.firstNode; currentNode; currentNode = currentNode.next) {
            printStr += currentNode.val + " -> "
            if(currentNode.next === null) {
                printStr += "X"
            }
        }
        console.log(printStr)
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
    let resultList = new List();
    while (l1 && l2) {
        if (l2.val > l1.val) {
            resultList.pushBack(l1.val);
            l1 = l1.next;
        } else {
            resultList.pushBack(l2.val);
            l2 = l2.next;
        }
    }
    let remainList = l1 ? l1 : l2;
    resultList.lastNode.next = remainList
    return resultList.firstNode.next;
};

let list1 = new List(2)
list1.pushFront(1)
list1.pushBack(3)
list1.pushBack(4)
list1.pushBack(5)
list1.pushFront(0)


let list2 = new List(2)
list2.pushBack(3)
list2.pushBack(4)
list2.pushBack(11)

let resultNode = mergeTwoLists(list1.firstNode, list2.firstNode)
let resultList = new List()
resultList.firstNode = resultNode
resultList.print()