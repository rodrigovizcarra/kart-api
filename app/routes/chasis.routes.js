module.exports = (app) => {
    const chasis = require('../controllers/chasis.controller.js');

    app.post('/chasis', chasis.create);

    app.get('/chasis', chasis.getAll);

    app.put('/chasis/:chasisid', chasis.update);

    app.delete('/chasis/:chasisid', chasis.delete);
}
