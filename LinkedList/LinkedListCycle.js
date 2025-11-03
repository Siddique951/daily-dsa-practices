

// Linked List Cycle [Leetcode Problem]


var hasCycle = function (head) {
    let seenNodes = new Set;
    let curr = head;
    while (curr != null) {
        if (seenNodes.has(curr)) {
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
};



// 2nd Approch [Floyd's cycle finding Algorithm]


var hasCycle = function (head) {
    if (!head) return false;

    let slow = head;
    let fast = head.next;
    while (slow != fast) {
        if (fast === null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};


