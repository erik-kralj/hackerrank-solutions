const assert = require("assert").strict

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
        function scan(node, level) {
            if (node == null) return level
            return Math.max(
                scan(node.left, level+1),
                scan(node.right, level+1)
            )
        }
        return scan(root, 1) - 2 /* 2=first and last node */
    }; // End of function getHeight
}; // End of function BinarySearchTree

function test(input, expectedOutput) {
    var tree = new BinarySearchTree()
    var root = null

    var values = input.split(' ').map(Number)

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i])
    }

    assert.strictEqual(tree.getHeight(root), expectedOutput)
}

test("7 3 5 2 1 4 6 7", 3)