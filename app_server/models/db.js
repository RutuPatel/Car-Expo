const mongoose = require('mongoose');
//mongo Db url
const dbURI = 'mongodb://Rutu2608:2268996424@cluster0-shard-00-00-932di.mongodb.net:27017,cluster0-shard-00-01-932di.mongodb.net:27017,cluster0-shard-00-02-932di.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';


//Connected msg
mongoose.connect(dbURI,  {dbName:'carDB',useNewUrlParser:true},function(err){
    if(err) console.log(err);
    else console.log('connected');
});

//Scehma
require('./car.js')

