const argument = process.argv
const func = argument[2]
console.log(func)

if(func === "add")
{
    console.log(Number(argument[3]) + Number(argument[4]))
}else if(func === "sub")
{
    console.log(Number(argument[3]) - Number(argument[4]))
}else if(func === "mult")
{
    console.log(Number(argument[3]) * Number(argument[4]))
}else if(func === "divide")
{
    console.log(Number(argument[3]) / Number(argument[4]))
}else if(func === "sin")
{
    console.log(Math.sin(Number(argument[3]) * Math.PI / 180 ))
}else if(func === "cos")
{
    console.log(Math.cos(Number(argument[3]) * Math.PI / 180 ))
}else if(func === "tan")
{
    let degrees = Number(argument[3]);
    let radians = degrees * Math.PI/180;
    console.log(Math.tan(radians))
}else if(func === "random")
{
    console.log((Math.random()*10+1).toFixed(2))
}
