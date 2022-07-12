class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
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

    remove() {
        for (let currentNode = this.firstNode; currentNode; ) {
            if (currentNode.next === null) {
                return
            }
            if (currentNode.val === currentNode.next.val) {
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }
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

let deleteDuplicates = function(head) {
    let resultList = new List(1)
    resultList.firstNode = head
    resultList.remove()
    return resultList.firstNode
};

let list1 = new List(5)
list1.pushBack(5)
list1.pushBack(5)
list1.pushBack(5)
list1.pushBack(5)
list1.pushBack(5)

let resultNode = deleteDuplicates(list1.firstNode)
let resultList = new List()
resultList.firstNode = resultNode
resultList.print()
