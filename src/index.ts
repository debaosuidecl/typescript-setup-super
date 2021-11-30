import express , {Request, Response} from 'express'

const app = express();


const port:number = 3000

app.get("/", (req:Request, res: Response)=>{
    res.json({
        message: "hey there"
    })
})
app.listen(port, ()=>{
    console.log(`listening at port: ${port}`)
})