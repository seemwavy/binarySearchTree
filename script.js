class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class tree {
    constructor() {
        this.root = null;
    }
    buildTree(array) {
        if (array.length === 0) {
            return;
        }
        array = array.sort((a, b) => a - b);
        const mid = Math.floor(array.length / 2);
        this.root = new Node(array[mid]);
        this.root.left = this.buildTree(array.slice(0, mid));
        this.root.right = this.buildTree(array.slice(mid + 1));
        return this.root;
    }
    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    inorder(fn = null, node = this.root) {
        if (!node) {
            return;
        }
        this.inorder(fn, node.left);
        if (fn) {
            fn(node);
        } else {
            result.push(node.value);
        }
        this.inorder(fn, node.right);
    }
    preorder(fn = null, node = this.root) {
        if (!node) {
            return;
        }
        if (fn) {
            fn(node);
        } else {
            result.push(node.value);
        }
        this.preorder(fn, node.left);
        this.preorder(fn, node.right);
    }
    
    postorder(fn = null, node = this.root) {
        if (!node) {
            return;
        }
        this.postorder(fn, node.left);
        this.postorder(fn, node.right);
        if (fn) {
            fn(node);
        } else {
            result.push(node.value);
        }
    }
    depth(node = this.root) {
        if (!node) {
            return 0;
        }
        return 1 + Math.max(this.depth(node.left), this.depth(node.right));
    }
    isBalanced(node = this.root) {
        if (!node) {
            return true;
        }
        const left = this.depth(node.left);
        const right = this.depth(node.right);
        return Math.abs(left - right) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }
    rebalance() {
        result = [];
        this.inorder();
        this.root = null;
        this.buildTree(result);
    }
}
