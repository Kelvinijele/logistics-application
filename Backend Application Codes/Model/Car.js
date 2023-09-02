const { Schema, model }= require('mongoose');

const carSchema = new Schema(
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
        carPlateNumber: {
            type: String,
            required: true,
        },
        vehicleLicense: {
            type: String,
            required: true,
        },
        hackenyPermit: {
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
        allocationOfPlateNumber: {
            type: String,
            required: true,
        },
        LASAA: {
            type: String,
            required: true,
        },
        LASDRI: {
            type: String,
            required: true,
        },
        otherDocuments: {
            type: Array,
        },

        additionalInformation: {
            type: String,
        },

},

{
    timestamps: true,
  }
);

const Car = model('Cars', carSchema);

module.exports = Car;