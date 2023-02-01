const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{   
    
    const path = require('path');
    const fs = require('fs');
    const directoryPath = path.join(__dirname,`${req.url}`);
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return res.end('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            res.write(""+file+""+"\n")
        });
        res.end()
    });
    
})

server.listen(5000)