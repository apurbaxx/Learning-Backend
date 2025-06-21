const http = require("http")
const {sumRequestHandler} = require('./sum')

const requesthandler = (req, res)=>{
    console.log(req.method, req.url)

    if(req.url=="/"){
        res.setHeader("Content-Type", "text/html")  
        res.write(`<html>
            <head>
            <title>Calculator></title>
            </head>
            <body>
<h1>Welcome to home page </h1>
<a href="/calculator">Calculator</a>
            </body>
            </html>`)
            return res.end()
    }else if(req.url=="/calculator"){
        res.setHeader("Content-Type", "text/html")
        res.write(`<html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <form action="calculator-result" method="POST">
                    <input type ="text" placeholder="First Num" name="first"></input>
                    <input type="text" placeholder="Second Num" name="second"></input>
                    <input type="submit" value="sum"></input>
                </form>
            </body>
        </html>`)
        return res.end()
    }else if(req.url=="/calculator-result" && req.method=="POST"){
        sumRequestHandler(req, res)

    }
}
exports.requesthandler = requesthandler