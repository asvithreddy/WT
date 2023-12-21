//.  26-10-23
// if you want to transfer dats , it will be having a port 
//you should have a server 
/*
var http=require('http')
http.createServer(function(request,response)
{
    response.writeHead(200,{"Content-type":'text/plain'})// it can be any type 
    response.end("Hello PESU")

}).listen(8080)
console.log("Server is running....")*/
//url module
/*
var http=require('http')
var url=require('url')
var addr="http://localhost:8080/pesu.htm?year=2023&month=october&day=23"
http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-type':'text/plain'})
    var q=url.parse(addr,true).query
    

    var txt=q.year+" "+q.month+" "+q.day
    response.end(txt)
    

}).listen(8080)
console.log("server is running....")
*/
var http=require('http')
var url=require('url')
var addr="http://localhost:8080/pesu.htm?year=2023&month=october&day=23"
http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-type':'text/plain'})
    var q=url.parse(addr,true)
    console.log(q.hostname)
    console.log(q.pathname)
    console.log(q.search)

}).listen(8080)
console.log("server is running....")


