const Comment = require('../models/comment.model');
const Collectable = require('../models/item.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello! Welcome to the Collector's Realm"
    });
}

module.exports.createComment = async function (request, response) {
    //Comment.create(request.body) 
    console.log(request.params);
    collectable = request.params;
    id = collectable.id;
    const  collectable_comment  = request.body;
    console.log(collectable_comment)
    // const comment = await Comment.create({
    //     collectable_comment,
    //     collectable:id
    // });
    // await comment.save();
    const collectableById = await Collectable.findById(id);
    console.log(collectableById);
    collectableById.comment.push(collectable_comment);
    await collectableById.save();
    Collectable.findOneAndUpdate({_id: request.params.id}, request.body,  {new:true})
    .then(updatedCollectable => response.json(updatedCollectable))
    .catch(err => response.json(err))


    // const collectableById = await Collectable.findById(id);

    // collectableById.comments.push(comment);
    // await collectableById.save();

    // return response.send(collectableById);
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

module.exports.collectableByComment = async function (req, res) {
    const { id } = req.params;
    const collectableByComment = await Comment.findById(id).populate('collectable');
    res.send(collectableByComment);
}