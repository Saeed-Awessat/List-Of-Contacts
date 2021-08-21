var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/my-app', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(database) {
    // we're connected!
    console.log("We're connected to MongoDB, Database: " + db.name);
});

// Creating a Model:
var UserDetails = mongoose.model("UserDetails", {
    FirstName: String,
    LastName: String,
    Email: String,
    Img: String,

});

module.exports = UserDetails;
