const mongoose = require('mongoose');
//This will create a database named "person" if one doesn't already exist (no need for mongo shell!):
mongoose.connect("mongodb://0.0.0.0:27017/", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

