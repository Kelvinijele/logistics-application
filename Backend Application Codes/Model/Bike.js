const { Schema, model }= require('mongoose');

const bikeSchema = new Schema(
    {
        individualName: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        companySignupCode: {
            type: String,
            required: true,
        },
        riderName: {
            type: String,
            required: true,
        }, /// { type: Schema.Types.ObjectId, ref: 'Rider' },
        riderIdNumber: {
            type: String,
            required: true,
        },
        bikePlateNumber: {
            type: String,
            required: true,
        },
        bikeVehicleLicense: {
            type: String,
            required: true,
        },
        hackenypermit: {
            type: String,
            required: true,
        },
        roadWorthiness: {
            type: String,
            required: true,
        },
        insurance: {
            type: String,
            required: true,
        },
        stageCarriagePermit: {
            type: String,
            required: true,
        },
        comprehensiveInsurance: {
            type: String,
        },
        lgPapers: {
            type: String,
            required: true,
        },
        ogHut: {
            type: String,
            required: true,
        },
        goodsOnly: {
            type: String,
            required: true,
        },
        ikdUnifiedByePass: {
            type: String,
            required: true,
        },
        minTransportationPapers: {
            type: String,
            required: true,
        },
        okPapers: {
            type: String,
            required: true,
        },
        ridersPermit: {
            type: String,
            required: true,
        },
        ogunStateHackenyPermit: {
            type: String,
            required: true,
        },
        GITInsurance: {
            type: String,
            required: true,
        },
        ifoLgHaulagePermit: {
            type: String,
            required: true,
        },
        allocationOfPlateNumber: {
            type: String,
            required: true,
        },
        LASAA: {
            type: String,
            required: true,
        },
        otherDocuments: {
            type: String,
        },
        additionalInformation: {
            type: String,
        },
        // modelNumber: {
        //     type: String,
        //     required: true,
        // },
        // licensePlateNumber: {
        //     type: String,
        //     required: true,
        // },
},

{
    timestamps: true,
  }
);

const Bike = model('Bikes', bikeSchema);

module.exports = Bike;