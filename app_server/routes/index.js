var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlCar = require('../controllers/carlist');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CARS' });
});


/* GET about page */
router.get('/about', ctrlAbout.about);
/* GET home list of car. */
router.get('/list', ctrlCar.homelist);
/* GET home display. */
router.get('/display', function(req, res, next) {
  res.render('display', { title: 'Not Yet Implemented' });
});
/* GET details */
router.get('/cars/:carid', ctrlCar.carInfo);
/* GET  new product add page . */
router.route('/new')
      .get(ctrlCar.addNewCar)
      .post(ctrlCar.doAddNewCar);


module.exports = router;

