import express from 'express'
//TODO: Create the image processing functions in this file, read, process then write in the different folder
const images = express.Router()

images.get('/', (req, res) => {
  res.send('Hello, this is image processing api!')
})
export default images
