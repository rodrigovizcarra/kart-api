const mongoose = require('mongoose');

const ChasisSchema = mongoose.Schema({
    partname: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('chasis', ChasisSchema);
