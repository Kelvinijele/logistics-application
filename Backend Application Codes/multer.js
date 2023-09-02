const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => { // naming file
        if (file.fieldname === "drivingLicense") {
          const drivingLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.drivingLicense = drivingLicense;
            cb(null, drivingLicense);
        }
      
      else if (file.fieldname === "otherDocuments") {
        const otherDocuments = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.otherDocuments = otherDocuments;
            cb(null, otherDocuments);
      }
      else if (file.fieldname === "vehicleLicense") {
        const vehicleLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.vehicleLicense = vehicleLicense;
            cb(null, vehicleLicense);
      }
      else if (file.fieldname === "hackenyPermit") {
        const hackenyPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
          req.hackenyPermit = hackenyPermit;
            cb(null, hackenyPermit);
      }
      else if (file.fieldname === "roadWorthiness") {
        cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
      }
      else if (file.fieldname === "insurance") {
        const insurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.insurance = insurance;
          cb(null, insurance);
      }
      else if (file.fieldname === "comprehensiveInsurance") {
        const comprehensiveInsurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.comprehensiveInsurance = comprehensiveInsurance;
          cb(null, comprehensiveInsurance);
      }
      else if (file.fieldname === "allocationOfPlateNumber") {
        const allocationOfPlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.allocationOfPlateNumber = allocationOfPlateNumber;
          cb(null, allocationOfPlateNumber);
      }
      else if (file.fieldname === "LASAA") {
        const LASAA = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.LASAA = LASAA;
          cb(null, LASAA);
      }
      else if (file.fieldname === "LASDRI") {
        const LASDRI = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        req.LASDRI = LASDRI;
          cb(null, LASDRI);
    }
    else if (file.fieldname === "riderName") {
      const riderName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
      req.riderName = riderName;
        cb(null, riderName);
  }
  else if (file.fieldname === "riderIdNumber") {
    const riderIdNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
    req.riderIdNumber = riderIdNumber;
      cb(null, riderIdNumber);
}
else if (file.fieldname === "bikePlateNumber") {
  const bikePlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.bikePlateNumber = bikePlateNumber;
    cb(null, bikePlateNumber);
}
else if (file.fieldname === "bikeVehicleLicense") {
  const bikeVehicleLicense = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.bikeVehicleLicense = bikeVehicleLicense;
    cb(null, bikeVehicleLicense);
}
else if (file.fieldname === "stageCarriagePermit") {
  const stageCarriagePermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.stageCarriagePermit = stageCarriagePermit;
    cb(null, stageCarriagePermit);
}
else if (file.fieldname === "lgPapers") {
  const lgPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.lgPapers = lgPapers;
    cb(null, lgPapers);
}
else if (file.fieldname === "ogHut") {
  const ogHut = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ogHut = ogHut;
    cb(null, ogHut);
}
else if (file.fieldname === "goodsOnly") {
  const goodsOnly = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.goodsOnly = goodsOnly;
    cb(null, goodsOnly);
}
else if (file.fieldname === "ikdUnifiedByePass") {
  const ikdUnifiedByePass = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ikdUnifiedByePass = ikdUnifiedByePass;
    cb(null, ikdUnifiedByePass);
}
else if (file.fieldname === "minTransportationPapers") {
  const minTransportationPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.minTransportationPapers = minTransportationPapers;
    cb(null, minTransportationPapers);
}
else if (file.fieldname === "okPapers") {
  const okPapers = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.okPapers = okPapers;
    cb(null, okPapers);
}
else if (file.fieldname === "ridersPermit") {
  const ridersPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ridersPermit = ridersPermit;
    cb(null, ridersPermit);
}
else if (file.fieldname === "ogunStateHackenyPermit") {
  const ogunStateHackenyPermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ogunStateHackenyPermit = ogunStateHackenyPermit;
    cb(null, ogunStateHackenyPermit);
}
else if (file.fieldname === "GITInsurance") {
  const GITInsurance = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.GITInsurance = GITInsurance;
    cb(null, GITInsurance);
}
else if (file.fieldname === "ifoLgHaulagePermit") {
  const ifoLgHaulagePermit = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.ifoLgHaulagePermit = ifoLgHaulagePermit;
    cb(null, ifoLgHaulagePermit);
}
else if (file.fieldname === "type") {
  const type = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.type = type;
    cb(null, type);
}
else if (file.fieldname === "vanPlateNumber") {
  const vanPlateNumber = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
  req.vanPlateNumber = vanPlateNumber;
    cb(null, vanPlateNumber);
}
  },
  })
   
const fileFilter = (req, file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|pdf|png|svg/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname)
    .toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }

  return cb(new Error('Only jpeg,pdf, jpg, svg and png files are allowed!'), false);
};
//const upload =multer({ storage: storage });

module.exports = multer({
  storage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter,
});
