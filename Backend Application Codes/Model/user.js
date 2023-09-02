
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
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


const User = model('Users', UserSchema);

module.exports = User;
