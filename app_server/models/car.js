const mongoose = require('mongoose');


//MOvie Scehma
const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        minlength : 3
    },
    bodytype:{
        type:String,
        required:true
        
    },
    price:{
        type:String,
        required:true
        
    },    
     year:{
        type:String,
        required:true
        
    },
    rating:{
        type:String,
        required:true 
     
    },
    color:{
        type:String,
        required:true 
         
    },
    transmission:{
        type:String,
        required:true 
         
    }
    ,
    enginecapacity:{
        type:String,
        required:true 
         
    }
    ,
    status:{
        type:String,
        required:true 
         
    }
                                        
});

module.exports = mongoose.model('Car',carSchema);