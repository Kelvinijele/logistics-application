const Bike  =  require('../../Model/Bike');


const getBikes = async ( req, res) => {
    try {
        let { page, limit } = req.query;
        limit = parseInt(limit);
        page = parseInt(page);
        
        const bikes = await Bike.find()
          .skip(!page ? 0 : page)
          .limit(!limit ? 50 : limit)
          .sort({ createdAt: -1 })
          .exec();
          const response = {
            message: "successful",
            bikes,
          };
          return res.json(response);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getSingleBike = async (req, res) => {
    try {
        const {id} = req.query;
        const bike  = await Bike.findById(id);
        const response = {
            message: "successful",
            bike,
          };
          return res.json(response);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const addBike = async(req, res) => {
  try {
      const { individualName, companyName, companySignupCode, riderName, riderIdNumber, bikePlateNumber, additionalInfo } = req.body;
      const bikeVehicleLicense = req.files.bikeVehicleLicense[0].path;
      const hackenyPermit = req.files.hackenyPermit[0].path;
      const roadWorthiness = req.files.roadWorthiness[0].path;
      const insurance = req.files.insurance[0].path;
      const stageCarriagePermit = req.files.stageCarriagePermit[0].path;
      const lgPapers = req.files.lgPapers[0].path;
      const ogHut = req.files.ogHut[0].path;
      const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path;
      const goodsOnly = req.files.goodsOnly[0].path;
      const ikdUnifiedByePass = req.files.ikdUnifiedByePass[0].path;
      const minTransportationPapers = req.files.minTransportationPapers[0].path;
      const okPapers = req.files.okPapers[0].path;
      const ridersPermit = req.files.ridersPermit[0].path;
      const ogunStateHackenyPermit = req.files.ogunStateHackenyPermit[0].path;
      const GITInsurance = req.files.GITInsurance[0].path;
      const ifoLgHaulagePermit = req.files.ifoLgHaulagePermit[0].path;
      const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path;
      const LASAA = req.files.LASAA[0].path;
      const otherDocuments = req.files.otherDocuments[0].path;

      let createBike;

      createBike = await Bike.create({
          individualName, 
          companyName, 
          companySignupCode, 
          riderName, 
          riderIdNumber, 
          bikePlateNumber,
          additionalInformation: additionalInfo,
          bikeVehicleLicense:bikeVehicleLicense,
          stageCarriagePermit,
          lgPapers,
          ogHut,
          goodsOnly,
          ikdUnifiedByePass,
          minTransportationPapers,
          okPapers,
          ridersPermit,
          ogunStateHackenyPermit,
          GITInsurance,
          ifoLgHaulagePermit,
          hackenyPermit,
          roadWorthiness,
          insurance,
          comprehensiveInsurance,
          allocationOfPlateNumber,
          LASAA,
          otherDocuments



      });

      createBike.save();
      const response = {
        message: "successful",
        createBike,
      };
      return res.json(response);
} catch (error) {
    return res.status(500).json(error.message);
}
};

module.exports = {
    addBike,
    getBikes,
    getSingleBike
};