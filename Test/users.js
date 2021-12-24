import { describe, interfaces } from "mocha";
import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://gorest.co.in/public/v1/")
const TOKEN = '11a526132a1f9476b1e962bd6cad40910c4d34780df846f9e7edbeeef93f4148';

describe('Users', () => {
    it('GET /users', () =>{
        return request.get('users?access-token=${TOKEN}').then((res) =>{
            expect(res.body.data).to.be.empty;
        });
    });

    it('POST /users', () =>{
        return request.post('users?access-token=${TOKEN}').then((res) =>{
            expect(res.body.data).to.be.empty;
        });
    });
});