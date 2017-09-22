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
  kittens.append(name)
}

function prependKitten(name){
  kittens.splice(0,name)
}

function removeLastKitten(){
  kittens.slice(0,kittens.length-1)
}

function removeFirstKittne(){
  kittens.slice(1,kittens.length)
}
