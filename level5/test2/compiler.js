// 未完结
function nodeToFragment (el) {
    let fragment = document.createDocumentFragment()
    let child = el.firstChild;
    while(child){
        fragment.appendChild(child)
        child = el.firstChild;
    }
    return fragment
}
function compileElement (el){
    let childNodes =el.childNodes
    let self = this
    // ...
}