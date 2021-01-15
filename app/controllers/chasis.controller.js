const Chasis= require('../models/chasis.model.js');


exports.create = (req, res) => {
    if(!req.body.partname) {
        return res.status(400).send({
            message: "Please enter partname"
        });
    }

    // Create a book
    const chasis = new Chasis({
        partname: req.body.partname,
        brand: req.body.brand,
        model: req.body.model,
        stock: req.body.stock || 0
    });

    // Save Book
    chasis.save()
        .then(oChasis => {
            res.send(oChasis);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the chasis."
        });
    });
};


exports.getAll = (req, res) => {
    Chasis.find()
        .then(oChasis => {
            res.send(oChasis);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the chasis."
            });
        });
};

exports.update = (req, res) => {
    Chasis.findByIdAndUpdate(req.params.chasisid, {
        stock: req.body.stock
    }, {new: true})
        .then(oChasis => {
            if(oChasis) {
                res.send(oChasis);
                return;
            }
            return res.status(404).send({
                message: "Chasis does not exist with chasisid " + req.params.chasisid
            });

        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Chasis does not exist with chasisid " + req.params.chasisid
            });
        }
        return res.status(500).send({
            message: "Some error occurred while updating the Chasis with chasisid" + req.params.chasisid
        });
    });
};

exports.delete = (req, res) => {
    Chasis.findByIdAndDelete(req.params.chasisid)
        .then(oChasis => {
            if(oChasis) {
                res.send({message: "Chasis has been deleted successfully!"});
                return;
            }
            return res.status(404).send({
                message: "Chasis not exist with chasisid" + req.params.chasisid
            });
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Chasis not exist with chasisid" + req.params.chasisid
            });
        }
        return res.status(500).send({
            message: "Some error occurred while deleting the chais with chasisid " + req.params.chasisid
        });
    });
};