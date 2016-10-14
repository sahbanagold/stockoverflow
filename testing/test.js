'use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;

var mongoose = require('mongoose');


var should = chai.should();

describe('StackOverClone', function() {
    it.only('should list ALL Users on /api/users	 GET', function(done) {
        chai.request('http://localhost:8080')
            .get('/api/questions')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('should add a SINGLE blob on /api/blogs POST', function(done) {
        chai.request('http://localhost:8080')
            .post('/api/blogs')
            .send({
                "article": "Hi",
                "contributor": "ivan",
                "comments": "halo"
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('article');
                res.body.should.have.property('contributor');
                res.body.should.have.property('comments');
                res.body.should.have.property('_id');
                res.body.article.should.equal('Hi');
                res.body.contributor.should.equal('ivan');
                res.body.comments.should.equal('halo');
                done();
            });
    });

    it('should update a SINGLE blob on /blob/<id> PUT', function(done) {
        chai.request('http://localhost:8080')
            .get('/api/blogs')
            .end(function(err, res) {
                chai.request('http://localhost:8080')
                    .put('/api/blogs/' + res.body[0]._id)
                    .send({
                        'article': 'Ivan'
                    })
                    .end(function(err, res) {
                        console.log(res.body);
                        res.should.have.status(200);
                        // // res.should.be.json;
                        // // res.body[0].should.be.a('object');
                        // // res.body[0].should.have.property('article');
                        // // res.body[0].should.have.property('contributor');
                        // // res.body[0].should.have.property('comments');
                        // // res.body[0].should.have.property('_id');
                        // res.body[0].article.should.equal('Ivan');
                        done();
                    });
            });
    });
    it('should delete a SINGLE blob on /blob/<id> DELETE', function(done) {});
});
