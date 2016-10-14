let mongoose = require('mongoose')
mongoose.connect('localhost:27017/test-stockoverflow')

let stocksSchema = new mongoose.Schema({
    nama_barang: String,
    jumlah: Number,
    harga: Number,
    photo: String,
})

let Stocks = mongoose.model('stocks', stocksSchema)

module.exports = Stocks
