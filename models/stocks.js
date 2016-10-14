let mongoose = require('mongoose')
mongoose.connect('mongodb://stackx:stackx@ds057816.mlab.com:57816/stackx')

let stocksSchema = new mongoose.Schema({
    nama_barang: String,
    jumlah: Number,
    harga: Number,
    photo: String,
})

let Stocks = mongoose.model('stocks', stocksSchema)

module.exports = Stocks
