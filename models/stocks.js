let mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:tkqpoOWfr057CfBTPlR6@containers-us-west-74.railway.app:6142')
// mongoose.connect('mongodb://stackx:stackx@ds057816.mlab.com:57816/stackx')


let stocksSchema = new mongoose.Schema({
    nama_barang: String,
    jumlah: Number,
    harga: Number,
    photo: String,
})

let Stocks = mongoose.model('stocks', stocksSchema)

module.exports = Stocks
