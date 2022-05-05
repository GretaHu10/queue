const createTree = (value)=>{
    return {
        data: value,
        children: null,
        parent: null
    };
};
const addChild = (node, value)=>{
    const newNode = {
        data: value,
        children: null,
        parent: node
    };
    node.children = node.children || [];
    node.children.push(newNode);
    return newNode;
};
const travel = (tree1, fn1)=>{
    fn1(tree1);
    if (!tree1.children) return;
    for(let i = 0; i < tree1.children.length; i++)travel(tree1.children[i], fn1);
};
const find = (tree2, node)=>{
    if (tree2 === node) return tree2;
    else if (tree2.children) for(let i = 0; i < tree2.children.length; i++){
        const result = find(tree2.children[i], node);
        if (result) return result;
        return undefined;
    }
    else return undefined;
};
const removeNode = (tree, node)=>{
    const siblings = node.parent.children;
    let index = 0;
    for(let i = 0; i < siblings.length; i++)if (siblings[i] === node) index = i;
    siblings.splice(index, 1);
};
const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
addChild(tree, 40);
const node5 = addChild(tree, 50);
addChild(node2, 201);
addChild(node2, 202);
addChild(node2, 203);
addChild(node2, 204);
console.log(tree);
const fn = (node)=>{
    console.log(node.data);
};
// travel(tree, fn)
// console.log(find(tree, node2))
removeNode(tree, node5);
console.log(tree);

//# sourceMappingURL=tree.b5359fbe.js.map
