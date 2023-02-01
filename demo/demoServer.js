// function demo(){
//     console.log("Hello")
// }

// function two(func){
//     func()
// }

// two(demo)

// const promise = new Promise((resolve,reject)=>{
//     // let str = ["a","m","i","t"]
//     let str = ["b","c","t"]
//     if(str.includes("a")||str.includes("e")||str.includes("i")||str.includes("o")||str.includes("u"))
//     {
//         resolve(
//             "True"
//         )
//     }else
//     {
//         reject(
//             "Reject"
//         )
//     }

// })

// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// const getData  = async()=>{
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts")
//     data = await data.json()
//     console.log(data)
// }

// getData()

// let array = [1,2,3,4,5]
// let ans = array.reduce((a,b)=>{
//      return a+b
// },0)

// console.log(ans)

// convert this elements of arr to binary using .map function
// let arr = [1,2,3,4,5]

// let out = arr.map((el)=>el.toString(2))
// console.log(out)

// Find the maximum element of arr by using .reduce function
// let arr = [1,2,3,4,5]

// let out = arr.reduce((max,curr)=>{
//     if(max < curr)
//     {
//         max = curr
//     }
//     return max
// })
// console.log(out)

// -----------------------------------------------------

// let x = +true
// console.log(x)
// console.log(typeof x)

// 1
// number

// -----------------------------------------------------

// console.log(!"Hisam")
// false

// -----------------------------------------------------

// let data = "size"
// let bird = {
//   size : "small"
// }

// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)

// small
// small
// small
// undefined

// -----------------------------------------------------

// let c= {name:"Hisam"}
// let d = c
// c.name = "Amit"
// console.log(d.name)

// // Amit

// -----------------------------------------------------

// let a = 3
// let b = new Number(3)

// console.log(a == b)
// console.log(a === b)
// console.log(typeof b)

// // true
// // false
// // object

// -----------------------------------------------------

// let num = 4

// console.log(num++)
// console.log(++num)
// console.log(num)

// // 4 because it will first console and then make increment
// // 6 because it will first make increment and then it will console
// // 6

// -----------------------------------------------------

// function getAge(...args){
//   console.log(typeof args)
//   console.log(args.length)
// }

// getAge(21)

// // object
// // 1

// -----------------------------------------------------

// const calc = eval(10*10/5)
// const calc1 = eval("10*10/5")

// console.log(calc)
// console.log(calc1)

// // 20
// // 20 because eval converts string to numbers

// -----------------------------------------------------

// let obj = { a: "one", b: "two", a: "three", c: "four" };

// console.log(obj);

// // {a:"three",b:"two",c:"four"}

// -----------------------------------------------------

for(let i = 1; i < 5; i++)
{
  if(i === 3) continue;
  console.log(i)
}

// 1
// 2
// 4

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// -----------------------------------------------------

// // Type of Fubctions
// // https://www.youtube.com/watch?v=SHINoHxvTso&ab_channel=AkshaySaini
// // Function Statement
// function a() {
//   console.log("Function Statement");
// }

// // Function Expression
// var b = function () {
//   console.log("Function Expression");
// };

// // Anonyms Function
// function(){
//     console.log("Anonyms Function")
// }

// // Named Function Expression
// var a = function xyz() {
//   console.log("Named Function Expression");
// };

// // First Class Function

// /* Ability of a function to be used like values or the ability
//  of a function to be returened from a function is called
//   First Class Function */
// var a = function () {
//   return function () {
//     console.log("Named Function Expression");
//   };
// };
