import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
app.use(express.json())
const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri = process.env.MONGO_URI  as string
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
