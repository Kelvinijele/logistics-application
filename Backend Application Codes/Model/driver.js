
const { Schema, model } = require('mongoose');

const DriverSchema = new Schema(
  {

    fullname: { type: String },
    phone: { type: String },
    email: { type: String },
    gender: { type: String},
    password: { type: String },
    accessToken: { type: String},
    refreshToken: {type: String},
    
  },
  {
    timestamps: true
    },
);


const Driver = model('Drivers', DriverSchema);

module.exports = Driver;
