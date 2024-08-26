const http=require("http")
const fs=require|('fs')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'})
    if(req.url=="/"){
        res.end("home page")
        
    }
    else if(req.url=="/login"){
        res.end("login")
    }
    else if(req.url=="/signup"){
        res.end("signup")
    }
    else if(req.url=="/contact"){
        res.end("contact")
    }
    else if(req.url=="/service"){
        res.end("service")
    }
    else{
        res.end("api")
    }

})

server.listen(8090,()=>{
    console.log("listing port 8090")
})