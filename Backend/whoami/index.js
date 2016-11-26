var http=require("http");
var express=require("express");

var app=express();
var port=process.env.PORT || 8080;

app.get("/*",function(req,res){
    var header=req.headers;
    var result;
    var ip=header["x-forwarded-for"];
    var lang=header["accept-language"].substring(0,5);
    var agent=header["user-agent"].substring(0, header["user-agent"].indexOf(')')+1);
    //res.send(req.headers);
    result={"ipaddress":ip,"language":lang,"software":agent};
    res.send(JSON.stringify(result));
});
app.listen(port); //PORT FOR C9, RATHER USE "1234","localhost"