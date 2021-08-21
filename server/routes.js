'use strict';
var dataController = require('./controllers/data.controller');

module.exports = function(app) {
    app.use(['/'], dataController);

    app.route('/:url(api|app|bower_components|assets)/*').get(function(req, res) {
        res.status(404).end();
    });
};
