
// 160. Intersection of Two Linked Lists [Leetcode Problem solve]


var getIntersectionNode = function (headA, headB) {
    let store = new Set();
    while (headB) {
        store.add(headB);
        headB = headB.next;
    }
    while (headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }
    return null;
};



