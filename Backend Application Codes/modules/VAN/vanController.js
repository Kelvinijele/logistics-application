// VAN SECTION
const Van = require('../../Model/Van');

const getVans = async ( req, res) => {
  try {
    let { page, limit } = req.query;
    limit = parseInt(limit);
    page = parseInt(page);
      const vans = await Van.find()
      .skip(!page ? 0 : page)
      .limit(!limit ? 50 : limit)
      .sort({ createdAt: -1 })
      .exec();
      const response = {
        message: "successful",
        vans,
      };
    return res.json(response);
} catch (error) {
    return res.status(500).json(error.message);
    }
};

const getSingleVan = async (req, res) => {
  try {
      const {id} = req.query
      const van  = await Van.findById(id);
      const response = {
        message: "successful",
        van,
      };
      return res.json(response);
} catch (error) {
    return res.status(500).json(error.message);
}
};


const addVan = async(req, res) => {
  try {
    const { individualName, companyName, companySignupCode, type, driverName, driverIdNumber, additionalInfo, vanPlateNumber } = req.body ;
    const drivingLicense = req.files.drivingLicense[0].path;
    const vehicleLicense = req.files.vehicleLicense[0].path;
    const hackenyPermit = req.files.hackenyPermit[0].path;
    const roadWorthiness = req.files.roadWorthiness[0].path;
    const insurance = req.files.insurance[0].path;
    const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path;
    const goodsOnly = req.files.goodsOnly[0].path;
    const ikdUnifiedByePass = req.files.ikdUnifiedByePass[0].path;
    const GITInsurance = req.files.GITInsurance[0].path;
    const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path;
    const otherDocuments = req.files.otherDocuments[0].path;

    let createVan;
    createVan = await Van.create({
      individualName, 
      companyName, 
      companySignupCode, 
      type, 
      driverName, 
      driverIdNumber, 
      additionalInfo, 
      vanPlateNumber,
      drivingLicense,
      vehicleLicense,
      hackenyPermit,
      roadWorthiness,
      insurance,
      comprehensiveInsurance,
      goodsOnly,
      ikdUnifiedByePass,
      GITInsurance,
      allocationOfPlateNumber,
      otherDocuments
    });
    createVan.save();
    const response = {
        message: "successful",
        createVan,
      };
      return res.json(response);
} catch (error) {
    return res.status(500).json(error.message);
    }
};


module.exports = {
    addVan,
    getVans,
    getSingleVan,
};