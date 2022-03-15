// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

const NewCats=[...cats,"Felix"]
// cats.push("Tom")
// cats.unshift("Rose")
// cats.pop()
// cats.shift
//cats.push("Felix")

function  destructivelyAppendCat(name){
    console.log(name)
cats.push(name)
}

function destructivelyPrependCat(name){
    console.log(name)
cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    console.log()
cats.pop()
}
function destructivelyRemoveFirstCat(){
    console.log()
cats.shift()
}
function appendCat(name){
    console.log(name)
    return[...cats,name]
}
function prependCat(name){
    return[name,...cats]
}
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat(){
    return cats.slice(1);
}
