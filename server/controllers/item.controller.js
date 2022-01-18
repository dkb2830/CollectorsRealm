const Collectable = require('../models/item.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello! Welcome to the Collector's Realm"
    });
}
          /* The method below is new */
module.exports.createCollectable = (request, response) => {
// Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
// request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Collectable.create(request.body) //This will use whatever the body of the client's request sends over
        .then(collectable => response.json(collectable))
        .catch(err => response.json(err));
}

module.exports.getAllCollectables = (request, response) => {
    Collectable.find({})
        .then(collectables => {
            console.log(collectables); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(collectables);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}



