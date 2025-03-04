import request from 'supertest'
import app from '../src/index'

//TODO: Test endpoint response, gets the api/images endpoint
describe('Express API Tests', () => {
  it('should return a JSON response from GET /api/images', async () => {
    const res = await request(app).get('/api/images')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, this is image processing api!')
  })
})
//TODO: Imange transform fucntion should resolve or reject
// describe('Image Transform Tests', () => {
//   it('should resolve or reject image transformation', async () => {
//     const res = await request(app).get('/api/images')
//     expect(res.status).toBe(200)
//     expect(res.text).toBe('Hello, Express with TypeScript!')
//   })
// })
//TODO: Expect transform to throw specific error
