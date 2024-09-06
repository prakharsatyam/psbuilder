import express from "express"
import { router as userRouter } from "./routes/user.routes.js"
import cors from 'cors'
const app = express()

app.use(cors({origin:"http://localhost:5173"}))
app.use('/api/v1',userRouter)
export default app