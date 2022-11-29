class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class List {

    constructor(...values) {
        this.firstNode = null
        this.push(...values)
    }

    push(...values) {
        if (!values.length) {
            return this
        }

        let lastNode = null
        if (this.firstNode === null) {
            this.firstNode = new ListNode(values[0])
            lastNode = this.firstNode
            values.shift()
        } else {
            lastNode = this.firstNode
            for (; lastNode.next !== null; lastNode = lastNode.next) {
            }
        }

        for (const val of values) {
            lastNode.next = new ListNode(val)
            lastNode = lastNode.next
        }
        return this
    }

    unshift(...values) {
        if (!values.length) {
            return this
        }

        if (this.firstNode === null) {
            this.push(...values)
        } else {
            for (let i = values.length - 1; i >= 0; i--) {
                this.firstNode = new ListNode(values[i], this.firstNode)
            }
            return this
        }
    }

    pop() {
        if (this.firstNode === null || this.firstNode.next === null) {
            this.firstNode = null
            return this
        }
        let lastNode = this.firstNode
        for (; lastNode.next.next !== null; lastNode = lastNode.next) {
        }
        lastNode.next = null
        return this
    }

    shift() {
        if (this.firstNode === null) {
            return this
        }
        this.firstNode = this.firstNode.next
        return this
    }

    insert(val, place) {
        if (place === 0) {
            return this.unshift(val)
        }

        let countNode = 0;
        let prefixNode = this.firstNode
        for (; countNode !== place - 1; prefixNode = prefixNode.next, countNode++) {
            if (prefixNode === null) {
                throw new Error("Out of bound")
            }
        }
        prefixNode.next = new ListNode(val, prefixNode.next)
        return this
    }

    remove(place) {
        if (place === 0) {
            return this.shift()
        }

        let countNode = 0;
        let prefixNode = this.firstNode
        for (; countNode !== place - 1 && prefixNode.next; prefixNode = prefixNode.next, countNode++) {
        }

        if (prefixNode.next === null) {
            throw new Error("Out of bound")
        }
        prefixNode.next = prefixNode.next.next
        return this
    }

    print() {
        for (let node = this.firstNode; node !== null; node = node.next) {
            let mes = ""
            if (node.next === null) {
                mes = node.val + "->x";
            } else {
                mes = node.val + "->";
            }
            process.stdout.write(mes)
        }
    }

}

let list = new List(0, 1, 2)

try {
    list.remove(3)
} catch (ex) {
    console.log(ex.message)
}

list.print()

