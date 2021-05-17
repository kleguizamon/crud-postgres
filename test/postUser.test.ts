import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.should();
chai.use(chaiHttp);

describe('Post /user', () => {
	it('Post users', (done) => {
		const user = {
			name: 'TEST11',
			surname: 'test1',
			age: '25',
			create_date: '2021-05-08 19:09:23.000000',
			email: 'test@gmail.com',
		};
		chai
			.request(app)
			.post('/users')
			.send(user)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});

	it('Not post users', (done) => {
		const user = {
			name: 'TEST2',
			surname: 'test1',
			age: '25',
			create_date: '2021-05-08 19:09:23.000000',
		};
		chai
			.request(app)
			.post('/users')
			.send(user)
			.end((err, res) => {
				res.should.have.status(400);
				done();
			});
	});
});
