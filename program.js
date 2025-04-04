let cart ={
    totalItems: null,
    items : [],
    removedItem: null
}

remove = function(){
    this.removedItem=this.items.pop()
}

cartLength = function(){
    this.totalItems= this.items.length
}

cart.items.push("Apples")
cart.items.push("Banana")
cart.items.push("Bread")
cart.items.push("Milk")

remove.call(cart)

cartLength.call(cart)

console.log(JSON.stringify(cart))