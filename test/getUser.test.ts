import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

chai.should();
chai.use(chaiHttp);

describe('Get /user', () => {
	it('Get all users', (done) => {
		chai
			.request(app)
			.get('/users')
			.end((err, res) => {
				res.should.have.status(200);
				// res.body.should.be.a('array');
				// res.body.length.should.be.eq(5);
				done();
			});
	});

	it('Not get all users', (done) => {
		chai
			.request(app)
			.get('/user')
			.end((err, res) => {
				res.should.have.status(404);
				done();
			});
	});
});
