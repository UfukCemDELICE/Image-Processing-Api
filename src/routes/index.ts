import express from 'express'
import images from './api/images'

const api = express.Router()

api.use('/images', images)

export default api
