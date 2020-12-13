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
    
    // Start of function levelOrder
    this.levelOrder = function(root) {

      function height(node) {
            if (node == null) return 0
            else {
                let lheight = height(node.left)
                let rheight = height(node.right)

                if (lheight > rheight) return lheight + 1
                else return rheight + 1
            }
        }

        function printGivenLevel(node, level) {
            if (node == null) return
            if (level === 1) process.stdout.write(node.data + " ")
            else if (level > 1) {
                printGivenLevel(node.left, level - 1)
                printGivenLevel(node.right, level - 1)
            }
        }

        function printLevelOrder(node) {
            let h = height(node)
            for (let i = 1; i <= h; i++) {
                printGivenLevel(node, i)
            }
        }

        printLevelOrder(root)

	}; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
});