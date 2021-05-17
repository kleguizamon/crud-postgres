import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.should();
chai.use(chaiHttp);

describe('Get /users/:id', () => {
	it('Get user by id', (done) => {
		chai
			.request(app)
			.get('/users/2')
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});

	it('Not get user by id', (done) => {
		chai
			.request(app)
			.get('/user/1')
			.end((err, res) => {
				res.should.have.status(404);
				done();
			});
	});
});
