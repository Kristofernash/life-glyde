const db = require('../models');

module.exports = {
create: function(req, res){
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNum: req.body.phoneNum,
        profilePic: req.body.profilePic,
        glider: req.body.glider,
        ushpaRating: req.body.ushpaRating,
        medicalInfo: req.body.medicalInfo,
        emergencyContactName: req.body.emergencyContactName,
        emergencyContactRelation: req.body.emergencyContactRelation,
        emergencyContactPhone: req.body.emergencyContactPhone
    };
    db.User
    .create(user)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
}
}