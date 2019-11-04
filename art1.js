var http=require("http")
var fs=require("fs")
var art=require("art-template")
http.createServer((req,res)=>{
    fs.readFile("./art1/art1.art",(err,data)=>{
        // if(req.url=="/favicon.ico"){
    //     return
    // }
        var tem=data.toString()
        var list=["tom","js","node"]
        var resl=art.render(tem,{a:list})
        res.end(resl)
    })
}).listen(3000)
