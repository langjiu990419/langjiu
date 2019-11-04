var express=require("express")
var app=express()
// get 指get请求
app.get("/get",(req,res)=>{
    console.log(arguments)
    res.send({'success':"get","data":[{'name':"tom"}]})
})
app.post("/list",(req,res)=>{
    console.log(arguments)
    res.send({'success':"post","data":[{'name':'tom'}]})
})
// all代表所有
app.all("/",(req,res)=>{
    console.log(arguments)
    res.send({'success':"all","data":[{'name':'tom'}]})
})
app.listen(3000)