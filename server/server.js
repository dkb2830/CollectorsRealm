// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true })); 
require('./config/mongoose.config');    
require('./routes/collectable.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

