import express, { response } from "express"
import "express-async-errors"
import cors from "cors"
import mongoose from "mongoose"
import { routes } from "./routes"
import { ExecptionListener } from "./shared/errors/ExceptionListener"


const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)
app.use(new ExecptionListener().catch)

console.log(process.env.MONGODB_URL, process.env.MONGODB_USER, process.env.MONGODB_PASSWORD)

mongoose.connect(process.env.MONGODB_URL as string, {
    auth: {
        password: process.env.MONGODB_PASSWORD,
        username: process.env.MONGODB_USER,
    },
    authSource: "admin"
})

app.listen(3333, () => console.log("server running!"))