//Importing the Express
const express = require('express');

const router = express.Router();

const ctrlCar = require('../controllers/car');


//LIst of cars
router.get('/cars',ctrlCar.getCars);

//Posting to DB
router.post('/cars',ctrlCar.createCar);


//Details of Car
router.get('/cars/:carid',ctrlCar.getSingleCar);

//Edit the car
router.put('/cars/:carid',ctrlCar.updateCar);

//Delete the moveie
router.delete('/cars/:carid',ctrlCar.deleteCar);



module.exports = router;