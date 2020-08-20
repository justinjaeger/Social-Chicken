const request = require('supertest');
const express = require('express');

const app = express();

const server = 'http://localhost:8080';

describe('Backend Unit Testing', () => {
    describe('GET', () => {
      describe('GET 200 status on main route', () => {
        it('responds with 200 status and text/html content type', () => {
          return request(server)
            .get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        });
      });
    });

    describe('GET 404 status on route /login', function() {
        it('responds with 404 status and text/html content type', () => {
            return request(server)
              .get('/login')
              .expect('Content-Type', /text\/html/)
              .expect(404);
        });
      });

    // describe('testing router /logout', function () {
    //     it('responds with 200 status and json successfully logout', () => {
    //         return request(server)
    //         .get('/add')
    //         .expect(200)
    //     })
    // })

    // test("testing if create works", done => {
    //     request(app)
    //     .post('/create')
    // })
});