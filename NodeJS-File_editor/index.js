const argument = process.argv
const operation = process.argv[2]
const file = require("fs")
if(operation === "read")
{
    file.readFile(`${argument[3]}`,{encoding:"utf-8"},(err,data)=>{
        if(data)
        {
            console.log(data)
        }else
        {
            console.log(err)
        }
    })

}else if(operation === "append")
{
    const content = argument[3]
    file.appendFile(`${argument[4]}`,` ${content}`,(err)=>{
        if(err)
        {
            console.log(err)
        }
    })

}else if(operation === "delete")
{
    file.unlink(`${argument[3]}`,(err)=>{
        if(err)
        {
            console.log(err)
        }
    })

}else if(operation === "rename")
{
    file.rename(`${argument[3]}`,`${argument[4]}`,(err)=>{
        if(err)
        {
            console.log(err)
        }
    })
}else if(operation === "list")
{
    file.readdir(`${argument[3]}`,{encoding:"utf-8"},(err,file)=>{
        if(file)
        {
            console.log(file)
        }else
        {
            console.log(err)
        }
    })
}else if(operation === "create")
{
    file.appendFile(`${argument[3]}`,"",(err)=>{
        if(err)
        {
            console.log(err)
        }
    })
}
