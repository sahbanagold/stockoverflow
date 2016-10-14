'use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;

var mongoose = require('mongoose');


var should = chai.should();

describe('Stockoverflow', function() {
    it('should list ALL Stock on /api/stock GET', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/stock')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('should add a New Stock /api/stock POST', function(done) {
        chai.request('http://localhost:3000')
            .post('/api/stock')
            .send({
                "nama_barang": "Aqua",
                "jumlah": "1",
                "harga": "2000",
                "photo": "string"
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.data.should.have.property('nama_barang');
                res.body.data.should.have.property('jumlah');
                res.body.data.should.have.property('harga');
                res.body.data.should.have.property('photo');
                res.body.data.nama_barang.should.equal('Aqua');
                res.body.data.jumlah.should.equal(1);
                res.body.data.harga.should.equal(2000);
                res.body.data.photo.should.equal('string');
                done();
            });
    });
    it('should add an Update Stock /api/stock PUT', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/stock')
            .end(function(err, res) {
                // console.log(res);
                chai.request('http://localhost:3000')
                    .put('/api/stock/' + res.body[0]._id)
                    .send({
                        "nama_barang": "Botolan",
                        "jumlah": "2",
                        "harga": "3000",
                        "photo": "string"
                    })
                    .end(function(err, res) {
                        chai.request('http://localhost:3000')
                            .get('/api/stock')
                            .end(function(err, res) {
                                res.should.have.status(200);
                                res.should.be.json;
                                res.body[0].should.have.property('nama_barang');
                                res.body[0].should.have.property('jumlah');
                                res.body[0].should.have.property('harga');
                                res.body[0].should.have.property('photo');
                                res.body[0].nama_barang.should.equal('Botolan');
                                res.body[0].jumlah.should.equal(2);
                                res.body[0].harga.should.equal(3000);
                                res.body[0].photo.should.equal('string');
                                done()
                            })
                    })
            });
    });
    // it('should update a SINGLE blob on /blob/<id> PUT', function(done) {
    //     chai.request('http://localhost:8080')
    //         .get('/api/blogs')
    //         .end(function(err, res) {
    //             chai.request('http://localhost:8080')
    //                 .put('/api/blogs/' + res.body[0]._id)
    //                 .send({
    //                     'article': 'Ivan'
    //                 })
    //                 .end(function(err, res) {
    //                     console.log(res.body);
    //                     res.should.have.status(200);
    //                     res.should.be.json;
    //                     res.body[0].should.be.a('object');
    //                     res.body[0].should.have.property('article');
    //                     res.body[0].should.have.property('contributor');
    //                     res.body[0].should.have.property('comments');
    //                     res.body[0].should.have.property('_id');
    //                     res.body[0].article.should.equal('Ivan');
    //                     done();
    //                 });
    //         });
    // });
    //  it('should delete a SINGLE blob on /blob/<id> DELETE', function(done) {});
});;
