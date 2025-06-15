import express from "express"

const app = express()
const port = 8080

app.use(express.json())

let teaData = []
let nextId = 1


app.post("/teas", (req,res)=>{
    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

app.get("/teas", (req,res)=>{
    res.status(201).send(teaData)
})

app.get("/teas/:id", (req,res)=>{
    const tea = teaData.find(t=> t.id===parseInt(req.params.id))
     if(!tea){
        return res.status(404).send(`Tea not found`)
    }

    res.status(200).send(tea)
})

app.put("/teas/:id", (req,res)=>{
    const tea = teaData.find(t => t.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send(`Tea Not Found for id ${req.params.id}`)
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
    
})

app.delete("/teas/:id", (req,res)=>{
    const index = teaData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index==-1){
        return res.status(404).send(`Not Found`)
    }
    teaData.slice(index, 1)
    return res.status(404).send(`Deleted id: ${req.params.id}`)
})

//delete tea

app.listen(port,()=>{
    console.log(`Server Running at port ${port}`)
})