import express from 'express'

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(4005, () => console.log("Server is running on port 4005"))