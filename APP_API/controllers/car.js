const mongoose = require('mongoose');

//importing th model scehma
const Car = mongoose.model('Car');


// Getting a List of Cars
const getCars=function(req,res){
    Car.find().exec(function(err, cardata) {
        if(err){
          res
          .status(404)
        .json(err);
    return;
    }
    res
    .status(200)
    .json(cardata);
    });
};

//Posting a Car To Database
const createCar=function(req,res){
   Car.create({
       name:req.body.name,
       bodytype:req.body.bodytype,
       year:req.body.year,      
       rating:req.body.rating,
       price:req.body.price,
       color:req.body.color,
       transmission:req.body.transmission,
       enginecapacity:req.body.enginecapacity,
       status:req.body.status
      
   }, (err, cardata)=>{
      if (err) {
       res
       .status(400)
       .json(err);
   } else {
       res
       .status(201)
       .json(cardata);
   }
   });
};

//Gettting details of aSingle Car when User Clicks a Car NAme
const getSingleCar=function(req,res){
    res
    Car.findById(req.params.carid)
    .exec((err,car) => {
        if(!car){
            return res 
               .status(404)
               .json({"message": "car not found"});
        } else if (err) {
            return res 
                  .status(404)
                  .json(err);
        }
        res 
            .status(200)
            .json(car);
        });
    };
       
const createCars=function(req,res){
    res
    .status(200)
    .json({"status":"success"});
};

//Updating the Database value 
const updateCar=function(req,res){
    if(!req.params.carid){
        res
        .status(404)
        .json({"message": "Not found, carid is required"});
        return;
    }
Car.findById(req.params.carid)
    .exec((err, cardata)=>{
        if(!cardata){
            res
            .json(404)
            .status({"message": "carid not found"});
            return;
        } else if (err){
            res 
            .status(400)
            .json(err);
            return;
        }
       cardata.name = req.body.name;
    cardata.name = req.body.name;
    cardata.bodytype = req.body.bodytype;
    cardata.year = req.body.year;
    cardata.rating = req.body.rating;
    cardata.price = req.body.price;
    cardata.color = req.body.color;
    cardata.transmission = req.body.transmission;
    cardata.enginecapacity = req.body.enginecapacity;
    cardata.status = req.body.status
    
    cardata.save((err,cardata) => {
        if(err){
            res
            .status(404)
            .json(err);
        } else{
            res
            .status(200)
            .json(cardata);
         }
    });
    });

};


//Delete particular Car
const deleteCar=function(req,res){
   const carid = req.params.carid;
   
    if (carid){
        Car
        .findByIdAndRemove(carid)
        .exec((err,cardata) =>{
        if(err){
            res
            .status(404)
            .json(err);
        return;
        }
    res
    .status(204)
    .json(null);
     });
    }
    else{
        res
        .status(404)
        .json({"message": "No carid"});
    }
};
   

//Exporting  all functions
module.exports={
    getCars,
    createCar,
    getSingleCar,
    updateCar,
    deleteCar
};



module.exports = {
    getCars,
    createCar,
    updateCar,
    deleteCar,
    getSingleCar
};

