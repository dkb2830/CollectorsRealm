const ItemController = require('../controllers/item.controller');
module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.post('/api/collectable', ItemController.createCollectable);  
    app.get('/api/collectables', ItemController.getAllCollectables); 
}

