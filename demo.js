// function add(a,b){
//     return a*b
// }

// function add1(a){
//     return function(b){
//         return a*b
//     }
// }
// console.log(add1(2)(5))
// console.log(add(2,5))


function outer(){
    var a = 9;
    return function inner(val){
        let ans = a*val
        return ans;
    }
}

let mult = outer()
console.log(mult(18))