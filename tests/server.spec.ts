import request from 'supertest'
import app from '../src/server'

describe('Express API Tests', () => {
  it('should return a JSON response from GET /', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ message: 'Hello, Express with TypeScript!' })
  })
})
