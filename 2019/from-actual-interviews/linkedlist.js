// implement a singly linked list
// be able to add new nodes and to retrieve a particular node


// create our prototype constructors
function LinkedList() {
    this.head = null;
}
function Node(value, next) {
    this.value = value;
    this.next = next;
}

// now add functionality
LinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, null);
    if (this.head) {
        newNode.next = this.head;
    }
    this.head = newNode;
};

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;
    
    while(currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode;
        }
        currentNode = currentNode.next; 
    }
    return null;
};
