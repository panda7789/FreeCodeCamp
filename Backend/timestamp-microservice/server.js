var http=require("http");
var express=require("express");
var validator=require("validator");
var moment=require("moment");
var app=express();

app.get("/*",function(req,res){
    var url=req.url.substring(1).replace(/%20/g," ");
    if(validator.isInt(url)){
        var a=new Date(Number(url)*1000); //create from unix stamp date
        var hotovo={
            "unix" : url,
            "natural" : moment(a).format("MMMM DD, YYYY")
        };
    }
    else{
        var b=Math.floor(new Date(url) / 1000); //convert to unix timestamp
        if(moment(url, 'MMMM DD, YYYY').isValid()){ //TODO simplify this thing.
            var hotovo={
                "unix" : b,
                "natural" : url
            }
        }
        else{
            var hotovo={
                "unix" : null,
                "natural" : null
            }
        }
        
    }
    res.send(JSON.stringify(hotovo));
});
app.listen(process.env.PORT || 8080);
