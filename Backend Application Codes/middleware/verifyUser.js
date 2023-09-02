const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../Model/user');

require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const authorization = req.header('Authorization');
    if (!authorization) {
      return createResponse(
        res,
        HttpStatusCode.StatusUnauthorized,
        ResponseStatus.Error,
        `Authorization token is invalid`
      );
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      return createResponse(
        res,
        HttpStatusCode.StatusUnauthorized,
        ResponseStatus.Error,
        `Authorization token is missing`
      );
    }

    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    const logUser = _.pick(user, [
      'fullname',
      'phone',
      'email',
      'gender',
      'password',
    ]);
     if (!user || (user && user.accessToken !== token)) {
      return res.status(401).json("Failed to authenticate user");
    }

    req.user = user;
    next();

     } catch (error) {
    
    return res.status(500).json(error.message);
}
};

