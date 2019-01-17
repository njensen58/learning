// LINKED LISTS
    class Node {
        constructor(){
            this.next = null;
            this.data 
        }
        appendToTail(node){
            const end = new Node(node)
            const n = this
            while(n.next !== null){
                n = n.next;
            }
            n.next = end;
        }
    }