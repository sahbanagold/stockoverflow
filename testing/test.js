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
                chai.request('http://localhost:3000')
                    .get('/api/stock')
                    .end(function(err, res) {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body[0].should.have.property('nama_barang');
                        res.body[0].should.have.property('jumlah');
                        res.body[0].should.have.property('harga');
                        res.body[0].should.have.property('photo');
                        res.body[0].nama_barang.should.equal('Aqua');
                        res.body[0].jumlah.should.equal(1);
                        res.body[0].harga.should.equal(2000);
                        res.body[0].photo.should.equal('string');
                        done()
                    })
            });
    });
    it('should an Update Stock /api/stock PUT', function(done) {
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
    it('should delete a SINGLE Stock on /api/stock/<id> DELETE', function(done) {
        chai.request('http://localhost:3000')
            .get('/api/stock')
            .end(function(err, res) {
                chai.request('http://localhost:3000')
                    .delete('/api/stock/' + res.body[0]._id)
                    .end(function(err, res) {
                        chai.request('http://localhost:3000')
                            .get('/api/stock')
                            .end(function(err, res) {
                                res.should.have.status(200);
                                res.should.be.json;
                                expect(res.body).to.have.length(0);
                                //console.log(res.body).to.have.length(0);
                                done()
                            })
                    });
            });
    });
    //  it('should delete a SINGLE blob on /blob/<id> DELETE', function(done) {});
});;
