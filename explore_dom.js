let a = this
a = window
a = document
a = document.all
a = document.all[1]
a = document.URL
a = document.domain
a = document.doctype
a = document.characterSet
a = document.contentType
a = document.head
a = document.title
a = document.body
a = document.forms
a = document.forms[2]
a = document.forms[1].action
a = document.forms[1].method
a = document.links[1]
a = document.links[1].href
a = document.links[1].className
a = document.links[1].classList //returns array
a = document.images
a = document.scripts
a = document.scripts[1].src
a = document.scripts[1].getAttribute("src")

console.log(a)

//We can not use  forEach loop in arrays which we get from DOM.
//We have to convert them into array to use them.
//ex:
let links = document.links
let linkArray = Array.from(links)
linkArray.forEach(function (link) {
    console.log(link)
})