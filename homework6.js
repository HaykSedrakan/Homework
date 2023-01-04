//Task 2
let treeNodes = [
  { id: 0, children: [1, 2] },
  { id: 1, children: [3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [] },
  { id: 4, children: [6] },
  { id: 5, children: [] },
  { id: 6, children: [] },
]

function findTree(treeObjNode, childrensTree = {}, index = treeObjNode[0]) {
  childrensTree[index.id] = {}

  for (let key in index.children) {
    let findTreeNode = treeObjNode.find(item => item.id === index.children[key])

    findTree(treeObjNode, childrensTree[index.id], findTreeNode)
  }
  return childrensTree
}

console.log(findTree(treeNodes))