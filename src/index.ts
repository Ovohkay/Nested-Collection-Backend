import express,{Application, Request, Response} from "express";
import authorRouter from "../Router/authorRouter";
import bookRouter from "../Router/bookRouter";

const app: Application = (express());

require("../Config/db")
const PORT = 2022;

app.use(express.json());

app.all("/", (req:Request, res: Response) : Response => {
   return res.status(200).json({
        message: " running"
    });
})
app.use("/api", authorRouter)
app.use("/api", bookRouter)

app.listen(PORT, () =>{
    console.log(`server is running ${PORT}`)
})