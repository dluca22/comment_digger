


/* per i commenti di HTML */
/*da modificare secondo esigenze, so solo che .SHOW_COMMENT è un method applicato a NodeFilter, devo capire come collegarlo a cio che mi interessa e filtrare l'inutile */

/*https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator */

/*importante è capire e creare un "createNodeIterator"  */

function filterNone() {
  return NodeFilter.FILTER_ACCEPT;
}

function getAllComments(rootElem) {
  var comments = [];
  // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
  var iterator = document.createNodeIterator(rootElem, NodeFilter.SHOW_COMMENT, filterNone, false);
  var curNode;
  while (curNode = iterator.nextNode()) {
    comments.push(curNode.nodeValue);
  }
  return comments;
}

window.addEventListener("load", function() {
  console.log(getAllComments(document.body));
});


//  fare dopo


// /*qua ho creato un element che seleizona tutti i <style> tag (importante includi i "" intorno a "style")
// in base a quel element ho visto manualmente che erano 6 elements e quindi reitero per 6 volte la funzione log del cssFile corrente di cui [0] stampo il valore .baseURI per paragonare se *uguale.a.sito.di.appartenenza*
// */


// var cssFile = document.getElementsByTagName("style")

// for (i = 0 ; i < 6; i++){
//     console.log(cssFile[0].baseURI)
//     }

