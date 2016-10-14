var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Stocks = require('../models/stocks.js')


router.get('/stock', function(req, res, next) {
    Stocks.find({}, function(err, result) {
        res.json(result)
    })
});

router.post('/stock', function(req, res, next) {
    let newStock = new Stocks({
        nama_barang: req.body.nama_barang,
        jumlah: req.body.jumlah,
        harga: req.body.harga,
        photo: req.body.photo
    }).save(function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "add is succesful",
                data: result
            })
        }
    })
});

router.put('/stock/:id', function(req, res, next) {
    Stocks.update({
        _id: req.params.id
    }, {
        nama_barang: req.body.nama_barang,
        jumlah: req.body.jumlah,
        harga: req.body.harga,
        photo: req.body.photo
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "update is sucessful",
                data: result
            })
        }
    })
});

router.delete('/stock/:id', function(req, res, next) {
    Stocks.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: "delete is successful"
            })
        }
    })
})

module.exports = router;
