const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser : true, useUnifiedTopology  : true })

const db = mongoose.connection;
db.on('error' , console.error(console , "Connection Error"))
db.once('open', function(){
    console.log("Connected Successfully");
});

require('./Category');