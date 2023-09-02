const bcrypt = require('bcryptjs');
const userModel = require('../../Model/user');
require('dotenv').config();
const authenticate  = require('../../middleware/authenticate');

const { SALT } = process.env;

const signUp = async(req, res) => {
    const { fullname,phone, email,gender, password, confPassword} = req.body;
try {
    
    let user = await userModel.findOne({
        $or: [
        { email: email.toLowerCase() },
        { phone: phone },
      ],
    });

    if(user){
        return res.status(400).json("credentials  already exist");
    }
    if(password !== confPassword){
        return res.json("password did not match");
    }
      const encryptedPassword = await bcrypt.hash(
      password.toString(),
      Number(SALT)
    );
    user = await userModel.create({
        fullname,
        phone,
        email: email.toLowerCase(),
        gender,
        password: encryptedPassword
    });

    await user.save();


    const response = {
      message: "successful",
      user,
    };
    return res.json(response);
} catch (error) {
    
    return res.status(500).json(error.message);
}

};

const login = async(req, res) => {
    try {
        const {email, password} = req.body;

    const user = await userModel.findOne({
         email: email.toLowerCase() 
      
    });

    if (!user) {
      return res.status(404).json("user not found");
      
    }

     const match = await bcrypt.compareSync(password, user.password);

     if(!match){
        return res.status(400).json("incorrect password");
     }

    const accessToken = await authenticate(user);
    const refreshToken = await bcrypt.hash(accessToken, Number(SALT));

    user.refreshToken = refreshToken;
    user.accessToken = accessToken;
    await user.save();

    const response = {
      message: "successful",
      user,
    };
    return res.json(response);
    } catch (error) {
    
    return res.status(500).json(error.message);
}
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await UserModel.findById(req.user.id);

    const match = await bcrypt.compareSync(oldPassword, user.password);

    if (!match) {
       if(!match){
        return res.status(400).json("incorrect old password");
     }
      
    }

    const encryptedPassword = await bcrypt.hash(
      newPassword.toString(),
      Number(SALT)
    );

    

    user.password = encryptedPassword;
    await user.save();

    const response = {
      message: 'successful',
    };

    return res.json(response);
    } catch (error) {
    
    return res.status(500).json(error.message);
}
};

const getLoggedInUser = async (req, res) => {
  try {
    const user = req.user;

  if (!user) {
      return res.status(404).json("user does not exist");
      
    }

    const response = {
      message: 'User retrieved successfully',
      user,
    };

    return res.json(response);
    } catch (error) {
    
    return res.status(500).json(error.message);
}
};

module.exports= {
    signUp,
    login,
    changePassword,
    getLoggedInUser
}