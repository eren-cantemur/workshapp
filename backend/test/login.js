process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');

// Server should splitted from app
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Login', () => {
    beforeEach((done) => {
        Book.remove({}, (err) => { 
           done();           
        });        
    });
    describe('/POST login', () => {
        it('it should not POST a login without email field', (done) => {
            let login = {
                password: "12345678"
            }
            chai.request(server)
                .post('/login')
                .send(login)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it('it should not POST a login without password field', (done) => {
            let login = {
                email: "example@example.com"
            }
            chai.request(server)
                .post('/login')
                .send(login)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                }
            );
        });
        it('it should POST a login ', (done) => {
            let login = {
                email: "example@example.com",
                password: "12345678"
            }
            chai.request(server)
                .post('/login')
                .send(login)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                }
            );
        });
    });
});
