const createNode = value => {
    return {
        data: value,
        next: null
    }
}


const createList = value => {
    return createNode(value)
}
const appendList = (list, value) => {
    const node = createNode(value)
    let x = list
    while (x.next) {
        x = x.next
    }
    x.next = node
    console.log("node")
    console.log(node)
    return node
}
const removeFromList = (list, node) => {
    let x = list
    let p = node
    while (x !== node && x !== null) {
        p = x
        x = x.next
    }
    if (x === null) {
        return false
    } else if (x === p) {
        p = x.next
        return p
    } else {
        p.next = x.next
        return list
    }
}

// const travelList = (list, fn) => {
//     let x = list
//     while (x !== null) {
//         fn(x)
//         x = x.next
//     }
// }



const list = createList(10)
const node = list
// const node2 = appendList(list, 20)
// const node3 = appendList(list, 30)
// const node4 = appendList(list, 40)
const newList = removeFromList(list, node)
// travelList(list, node => {
//     console.log(node.data)
// })
console.log("list")
console.log(list)
console.log("删掉第一个节点newList")
console.log(newList)
