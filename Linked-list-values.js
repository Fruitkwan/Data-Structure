class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');


// A -> B -> C -> D -> null
a.next = b;
b.next = c;
c.next = d; // d is the last node


const printLinkedList = (head) => {
    let current = head;
    while(current !== null){
        console.log('Normal call', current.value);
        current = current.next;
    }
}

printLinkedList(a);


// recursive solution

const printLinkedListRecursive = (head) => { // head is the first node
    if(head === null) return;
    console.log('Recursive call', head.value);
    printLinkedListRecursive(head.next);
}

printLinkedListRecursive(a);


