const router = require('express').Router();

const {verifyUser} = require('../../middleware/verifyUser');

const multer = require('../../multer');

const { addBike,
    getBikes,
    getSingleBike } = require('./bikeController');

    router.post('createBike',
    multer.single('bikeVehicleLicense'),
    multer.single('hackenyPermit'),
    multer.single('roadWorthiness'),
    multer.single('insurance'),
    multer.single('stageCarriagePermit'),
    multer.single('lgPapers'),
    multer.single('ogHut'),
    multer.single('comprehensiveInsurance'),
    multer.single('goodsOnly'),
    multer.single('ikdUnifiedByePass'),
    multer.single('minTransportationPapers'),
    multer.single('okPapers'),
    multer.single('ridersPermit'),
    multer.single('ogunStateHackenyPermit'),
    multer.single('GITInsurance'),
    multer.single('ifoLgHaulagePermit'),
    multer.single('allocationOfPlateNumber'),
    multer.single('LASAA'),
    multer.single('otherDocuments'),
    addBike);


    router.post('/allBikes', getBikes);

    router.post('/singleBike',  getSingleBike);

  
    module.exports = router;