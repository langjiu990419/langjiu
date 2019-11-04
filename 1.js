// 接收get请求传输的参数
var exp=require("express")
var app=exp()
app.get("/",(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log("接受的参数:"+req.query)
    res.send({"data":req.query})
})
// app.get("/getid/:id",(req,res)=>{
//     res.send("成功")
// })
app.get("/getid/:id",(req,res)=>{
    res.send({"data":req.params.id})
})
app.listen(3000)