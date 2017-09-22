const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newKittens = kittens.splice(kittens.length,name)
  return newKittens
}

function prependKitten(name){
  var newKittens = kittens.splice(0,name)
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

function removeFirstKittne(){
  var newKittens = kittens.slice(1,kittens.length)
  return newKittens
}
