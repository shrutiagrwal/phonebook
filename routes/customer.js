const express = require('express');
const router = express.Router();
const Customer = require('../../../models/customer')

router.get('/', async(req, res) => {
    let customer = await Customer.find().sort('name');
    res.send(customer);
})

router.get('/create', (req, res) => {
    res.render(form);
})

router.post('/create', async(req, res) => {
    let customer = await Customer.findOne({ email: req.body.email });
    if (customer) {
        return customer.message.push(req.body.message);
    } else {
        customer = new Customer({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        });
    }
    try {
        await customer.save();
    } catch (ex) {
        console.log(ex);
    }
    res.redirect('/');
})
router.delete('/delete/:id', async(req, res) => {
    let customer = await Customer.findByIdAndRemove(req.params.id);
    res.send("deleted");

})
module.exports = router;