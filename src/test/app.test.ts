import { app } from '../app';
import request = require('supertest');

describe('App Test', () => {
    it('should return status 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
    
    it('should say "Hello World!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello World!');
    });
});
