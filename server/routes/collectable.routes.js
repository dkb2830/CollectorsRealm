const ItemController = require('../controllers/item.controller');
module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.get('/api/collectable', ItemController.getAllCollectables);
    app.post('/api/collectable', ItemController.createCollectable);
    app.get('/api/collectable/:id', ItemController.getCollectable);

}

