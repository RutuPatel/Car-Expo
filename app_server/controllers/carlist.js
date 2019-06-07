const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
};

//Render the HOmepage
const _renderHomepage = function(req, res, responseBody){
    res.render('list-display',{
        cars: responseBody
    });
};


// Render the List of   from API
const homelist = function(req,res){
    const path = '/api/cars';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
        _renderHomepage(req, res, body);
        }
    );
};


//Render the Details Page for Particular cars
const _renderDetailPage = function(req, res, responseBody){
    res.render('details',{
        currentCar: responseBody
    });
};

// Calling Getsingle Car To get Car details
const carInfo = function(req, res){
    const path = `/api/cars/${req.params.carid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req,res,body);
        }
    );
};

const _renderCreatePage = function(req, res){
    res.render('create',{
        title: "Add New Car"
    });
};


//Adding a new Car to api
const addNewCar = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewCar = function(req, res){
    const path = '/api/cars';
    const postdata = {
       name:req.body.name,
       bodytype:req.body.bodytype,
       year:req.body.year,      
       rating:req.body.rating,
       price:req.body.price,
       color:req.body.color,
       transmission:req.body.transmission,
       enginecapacity:req.body.enginecapacity,
       status:req.body.status
    };
    const requestOptions = {
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
    requestOptions,
    (err, response, body) => {
        if(response.statusCode === 201){
            res.redirect('/');
        }
    }
    );
};

module.exports = {
 homelist, carInfo, doAddNewCar, addNewCar 
};




