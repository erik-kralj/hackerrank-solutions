this.removeDuplicates=function(head){
    if (head != null && head.next != null) {
        if (head.data === head.next.data) {
            head.next = head.next.next
            this.removeDuplicates(head)
        } else {
            this.removeDuplicates(head.next)
        }
    }
    return head
}
