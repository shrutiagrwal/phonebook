const mongoose = require('mongoose')
const customerschema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    address: String
})
Customer = mongoose.model('customer', customerschema);
module.exports = Customer;