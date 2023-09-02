const Car  =  require('../../Model/Car');


const getCars = async ( req, res) => {
    try {
    let { page, limit } = req.query;
    limit = parseInt(limit);
    page = parseInt(page);
    
    const cars = await Car.find()
      .skip(!page ? 0 : page)
      .limit(!limit ? 50 : limit)
      .sort({ createdAt: -1 })
      .exec();
      const response = {
        message: "successful",
        cars,
      };
      return res.json(response);
} catch (error) {
    return res.status(500).json(error.message);
}
};

const getSingleCar = async (req, res) => {
    try {
        const {id} = req.query;
        const car  = await Car.findById(id);
        const response = {
            message: "successful",
            car,
          };
          return res.json(response);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// exports.addCar = async(req, reply) => {
//     try {
//         const { individualName, companyName, companySignupCode, driverName, driverIdNumber, additionalInfo } = req.body
//         const drivingLicense = req.files.drivingLicense[0].path
//         const plateNumber = req.files.plateNumber[0].path
//         const vehicleLicense = req.files.vehicleLicense[0].path
//         const hackenyPermit = req.files.hackenyPermit[0].path
//         const roadWorthiness = req.files.roadWorthiness[0].path
//         const insurance = req.files.insurance[0].path
//         const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path
//         const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path
//         const LASAA = req.files.LASAA[0].path
//         const LASDRI = req.files.LASDRI[0].path
//         const otherDocuments = req.files.otherDocuments[0].path

//         let createCar;

//         createCar = await Car.create({
//             individualName, 
//             companyName, 
//             companySignupCode, 
//             driverName, 
//             driverIdNumber, 
//             additionalInformation: additionalInfo,
//             driverDrivingLicense: drivingLicense,
//             carPlateNumber:plateNumber,
//             vehicleLicense,
//             hackenyPermit,
//             roadWorthiness,
//             insurance,
//             comprehensiveInsurance,
//             allocationOfPlateNumber,
//             LASAA,
//             LASDRI,
//             otherDocuments



//         })

//         createCar.save();
//     return createCar

//     } catch (error) {
//         fastify.log.error(error)
//         throw boom.boomify(error)
//     }
// }
const addCar = async(req, res) => {
    try {
        const { individualName, companyName, companySignupCode, driverName, driverIdNumber, additionalInfo } = req.body;
        const drivingLicense = req.files.drivingLicense[0].path ;
        const plateNumber = req.files.plateNumber[0].path ;
        const vehicleLicense = req.files.vehicleLicense[0].path ;
        const hackenyPermit = req.files.hackenyPermit[0].path ; 
        const roadWorthiness = req.files.roadWorthiness[0].path ; 
        const insurance = req.files.insurance[0].path ;
        const comprehensiveInsurance = req.files.comprehensiveInsurance[0].path ;
        const allocationOfPlateNumber = req.files.allocationOfPlateNumber[0].path ;
        const LASAA = req.files.LASAA[0].path ;
        const LASDRI = req.files.LASDRI[0].path ;
        const otherDocuments = req.files.otherDocuments[0].path ;

        let createCar;

        createCar = await Car.create({
            individualName, 
            companyName, 
            companySignupCode, 
            driverName, 
            driverIdNumber, 
            additionalInformation: additionalInfo,
            driverDrivingLicense: drivingLicense,
            carPlateNumber:plateNumber,
            vehicleLicense,
            hackenyPermit,
            roadWorthiness,
            insurance,
            comprehensiveInsurance,
            allocationOfPlateNumber,
            LASAA,
            LASDRI,
            otherDocuments



        });

        createCar.save();
        const response = {
            message: "successful",
            createCar,
          };
          return res.json(response);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    addCar,
    getCars,
    getSingleCar,
};