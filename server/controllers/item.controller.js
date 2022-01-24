const Collectable = require('../models/item.model'); 
const Comment = require('../models/comment.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello! Welcome to the Collector's Realm"
    });
}
module.exports.createCollectable = (request, response) => {
        const {name, description} = request.body;
        Collectable.create({
            name: name,
            description: description
        })
    
   // Collectable.create(request.body) 
            .then(collectable => response.json(collectable))
            .catch(err => response.status(400).json(err))
}

module.exports.commentsOnCollectable = async (request, response) => {
    const { id } = request.params;
    const collectable = await Collectable.findById(id).populate('comments');

    response.send(collectable.comments);
}

module.exports.getAllCollectables = (request, response) => {
    Collectable.find({})
        .then(collectables => {
            console.log(collectables); 
            response.json(collectables);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getCollectable = (request, response) => {
    Collectable.findOne({_id:request.params.id})
        .then(collectable => response.json(collectable))
        .catch(err => response.json(err))        
}

module.exports.updateCollectable = (request, response) => {
    Collectable.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedCollectable => response.json(updatedCollectable))
    .catch(err => response.json(err))
}

module.exports.deleteCollectable = (request, response) => {
    Collectable.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getAllComments = (request, response) => {
    Comment.find({})
        .then(comments => {
            console.log(comments); 
            response.json(comments);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}









