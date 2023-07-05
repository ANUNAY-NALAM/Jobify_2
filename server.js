import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
const app = express()

dotenv.config()

app.use(cors)
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({msg:'well come'})
})
app.get('/api/v1',(req,res)=>{
  res.json({msg:'well come'})
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const port =process.env.PORT||5000


const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      )
    } catch (error) {
      console.log(error)
    }
  }
  
  start()

