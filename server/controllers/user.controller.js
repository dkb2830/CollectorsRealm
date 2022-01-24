const User = require('../models/user.model'); 

module.exports = {
    register: (req, res) => {
        User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    }
}