'use strict';
let UserDetails = require('../api/data/datastore.js');
let express = require('express');
const constants = {img: 'https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1'};


function responseErrorToClient(res, error, aStatus) {
    let status = aStatus || 500;
    res.status(status).send({
        status: error
    });
}

function getUsers(req, res) {
    UserDetails.find({}).sort({ _id: -1 }).limit(10).exec(function (err, users) {
        console.log('users:- ',users.length);
        if(err){
            responseErrorToClient(res,err);
        }
        else res.json(users);
    })
}

function setUser(req, res) {
    var userDetails = new UserDetails(req.body);
    userDetails.Img = userDetails.Img ? userDetails.Img : constants.img ;
    userDetails.save(function (err, user) {
        if (err) {
            console.log("Error: " + err);
            responseErrorToClient(res,err);
        }
        else {
            res.json(user);
        }
    });
}


let router = express.Router();

router.get('/getUsers', getUsers);
router.post('/setUser', setUser);

module.exports = router;
