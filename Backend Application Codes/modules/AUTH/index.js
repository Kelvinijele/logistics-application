const router = require('express').Router();

const {verifyUser} = require('../../middleware/verifyUser');



const { signUp,
    login,
    changePassword,
    getLoggedInUser } = require('./authController');

    router.post('/createUser', signUp);


    router.post('/login', login);

    router.post('/resetPassword',  changePassword);

    router.post('/getAuthUser', getLoggedInUser);

    module.exports = router;