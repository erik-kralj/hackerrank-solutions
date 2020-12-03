this.insert=function(head,data){
    if (head == null) return new Node(data);
    let prev = head, start = head;
    while (start != null) {
        prev = start;
        start = start.next;
    }
    prev.next = new Node(data);
    return head;
};