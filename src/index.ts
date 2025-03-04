import express from 'express'

import api from './routes/index'

const app = express()
const port = 3000

app.use('/api', api)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/api/images`)
})

export default app
