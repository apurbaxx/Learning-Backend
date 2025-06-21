const sumRequestHandler = (req, res)=>{
    console.log(`Printing Sum`)
    const body = []
    req.on("data", (chunk)=>{
        body.push(chunk)
    })
    req.on("end", ()=>{
        const bodyStr = Buffer.concat(body).toString()
        console.log(bodyStr)
        const urlEncoded = new URLSearchParams(bodyStr)
        console.log(urlEncoded)
        const bodyObj = Object.fromEntries(urlEncoded)
        console.log(bodyObj)
        const solution = Number(bodyObj.first)+Number(bodyObj.second)
        console.log(solution)
        res.write(`
            <html>
            <head>
            <title>Solution</title>
            </head>
            <body>
            <h1>Solution = ${solution}</h1>
            </body>
            </html>`)
        return res.end()
    })
}

exports.sumRequestHandler = sumRequestHandler