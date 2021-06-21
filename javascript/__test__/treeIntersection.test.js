const BinaryTree = require('../challenges/Tree/tree/tree').BinaryTree;
const insetTree = require('../challenges/hashtable/treeIntersection/treeIntersection');
const Node = require('../challenges/Tree/tree/tree').Node;




describe('Testing insetTree function ',()=>{
  it('No Matches between both trees, although repeated element in the same tree',()=>{
    let tree1 =new BinaryTree();
    let root = tree1.root = new Node(1);
    let left = root.left = new Node(1);
    let right = root.right = new Node(3);
    left.left = new Node(4);
    left.right = new Node(7);
    right.left = new Node(50);
    right.right = new Node(60);


    let tree2 =new BinaryTree();
    let root2 = tree2.root = new Node(10);
    let left2 = root2.left = new Node(20);
    let right2 = root2.right = new Node(30);
    left2.left = new Node(40);
    left2.right = new Node(70);
    right2.left = new Node(5);
    right2.right = new Node(6);
    expect(insetTree(tree1,tree2)).toEqual('No matches');
  });

  it('return a set of values found in both trees.',()=>{
    let tree1 =new BinaryTree();
    let root = tree1.root = new Node(1);
    let left = root.left = new Node(2);
    let right = root.right = new Node(3);
    left.left = new Node(4);
    left.right = new Node(7);
    right.left = new Node(50);
    right.right = new Node(60);


    let tree2 =new BinaryTree();
    let root2 = tree2.root = new Node(1);
    let left2 = root2.left = new Node(2);
    let right2 = root2.right = new Node(30);
    left2.left = new Node(4);
    left2.right = new Node(7);
    right2.left = new Node(5);
    right2.right = new Node(6);

    expect(insetTree(tree1,tree2)).toEqual( [ 1, 2, 4, 7 ]);
  });
});

