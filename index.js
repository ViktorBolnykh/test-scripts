function sum(n1, n2) {
    return n1 + n2

}
console.log(sum(1 ,2))
module.exports = sum;

// ['a' , 'bc'] => ['A','BC']
function allUpper (arr){
    return arr.map(el => el.toUpperCase())
}

function allLower (arr){
    return arr.map(el => el.toLowerCase())
}

module.exports = {sum, allUpper,allLower};