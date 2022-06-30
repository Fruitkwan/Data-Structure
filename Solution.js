// Problem
// write a function, linkedListValues that takes in the head of a linked list as argument and returns an array containing all the values of the linked list.

//test_00
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// a.next = b;
// b.next = c;
// c.next = d;
// a -> b -> c -> d -> null
// linkedListValues(a) // -> ['A', 'B', 'C', 'D']

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


//Solution iterative
const linkedListValues = (head) => {
    let current = head;
    let values = [];
    while(current !== null){
        values.push(current.value);
        current = current.next;
    }
    console.log('Iterative call', values);
    return values;
    
}

linkedListValues(a);

//Solution recursive
const linkedListValuesRecursive = (head) => {
    const values = [];
    fillValues(head, values);
    console.log('Recursive call', values);
    return values;
}

const fillValues = (head, values) => {
    if(head === null) return;
    values.push(head.value);
    fillValues(head.next, values);
}

linkedListValuesRecursive(a);
