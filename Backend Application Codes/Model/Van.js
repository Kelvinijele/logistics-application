const { Schema, model }= require('mongoose');

const vanSchema = new Schema(
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
        type: {
            typr: String,
            required: true
        },
        driverName: {
            type: String,
            required: true,
        }, /// { type: Schema.Types.ObjectId, ref: 'Rider' },
        driverIdNumber: {
            type: String,
            required: true,
        },
        driverDrivingLicense: {
            type: String,
            required: true,
        },
        vanPlateNumber: {
            type: String,
            required: true,
        },
        vehicleLicense: {
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
        comprehensiveInsurance: {
            type: String,
        },
        goodsOnly: {
            type: String,
            required: true,
        },
        ikdUnifiedByePass: {
            type: String,
            required: true,
        },
        GITInsurance: {
            type: String,
            required: true,
        },
        allocationOfPlateNumber: {
            type: String,
            required: true,
        },
        otherDocuments: {
            type: String,
        },

        additionalInformation: {
            type: String,
        },
},

{
    timestamps: true,
  }
);

// email: {
//     type: String,
//     required: true,
//   },

const Van = model('Vans', vanSchema);

module.exports = Van;