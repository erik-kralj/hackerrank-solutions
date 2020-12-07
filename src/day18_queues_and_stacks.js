class Solution {
    constructor() {
        this.stack = [];
        this.queue = [];
    }

    pushCharacter(ch) {
        this.stack.push(ch);
    }

    enqueueCharacter(ch) {
        this.queue.push(ch);
    }

    popCharacter(ch) {
        return this.stack.pop();
    }

    dequeueCharacter(ch) {
        return this.queue.shift();
    }
}