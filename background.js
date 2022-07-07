// commento

//iniziamo a creare un dom element su cui passare funzioni

let thehtml = document.createElement("html")

// dobbiamo creare un node iterator che accetta ()

//deprecated
//const quest0 = document.rootElement

const questo = Document.documentElement

function filter(){
    return NodeFilter.FILTER_ACCEPT;
}

function getAllComments(rootElement) {
    var comments = [];
    var iterator = document.createNodeIterator(rootElement, NodeFilter.SHOW_COMMENT, filter);
    var currentNode;
    while (currentNode = iterator.nextNode()){
        comments.push(currentNode.nodeValue);
    }
    return comments;
}

getAllComments(questo)
console.log(comments)