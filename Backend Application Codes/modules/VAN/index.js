const router = require('express').Router();

const {verifyUser} = require('../../middleware/verifyUser');


const multer = require('../../multer');

const {   addVan,
    getVans,
    getSingleVan, } = require('./vanController');

    router.post('createVan', 
    multer.single('drivingLicense'),
    multer.single('vehicleLicense'),
    multer.single('hackenyPermit'),
    multer.single('roadWorthiness'),
    multer.single('insurance'),
    multer.single('comprehensiveInsurance'),
    multer.single('goodsOnly'),
    multer.single('ikdUnifiedByePass'),
    multer.single('GITInsurance'),
    multer.single('allocationOfPlateNumber'),
    multer.single('otherDocuments'),
    addVan);


    router.post('/allVans', getVans);

    router.post('/singleVan',  getSingleVan);

  
    module.exports = router;