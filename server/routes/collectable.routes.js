const ItemController = require('../controllers/item.controller');
const CommentController = require('../controllers/comment.controller')
module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.get('/api/collectable', ItemController.getAllCollectables);
    app.post('/api/collectable', ItemController.createCollectable);
    app.get('/api/collectable/:id', ItemController.getCollectable);
    app.post('/api/collectable/:id', CommentController.createComment);
    app.get('/api/collectable/:id', CommentController.getAllComments);
    app.post('/api/populate/:id', CommentController.collectableByComment);
    app.put('/api/collectable/:id', ItemController.updateCollectable);
    app.delete('/api/collectable/:id', ItemController.deleteCollectable); 
}

