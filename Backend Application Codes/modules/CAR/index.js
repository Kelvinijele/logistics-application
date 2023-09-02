const router = require('express').Router();

const multer = require('../../multer');
 
const {verifyUser} = require('../../middleware/verifyUser');

const {   addCar,
    getCars,
    getSingleCar, } = require('./carController');

    router.post('createCar',
    multer.single('drivingLicense'),
    multer.single('plateNumber'),
    multer.single('vehicleLicense'),
    multer.single('hackenyPermit'),
    multer.single('roadWorthiness'),
    multer.single('insurance'),
    multer.single('comprehensiveInsurance'),
    multer.single('allocationOfPlateNumber'),
    multer.single('LASAA'),
    multer.single('LASDRI'),
    multer.single('otherDocuments'),
     addCar);


    router.post('/allCars', getCars);

    router.post('/singleCar',  getSingleCar);

  
    module.exports = router;