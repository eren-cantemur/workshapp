const { User, WorkshopManager, Admin, Customer } = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../../config/jwt.config')

exports.login = async (email, password) => {
  const user = await User.findOne({where : {email: email}});
  if (user === null) {
    return {
      type: "Error",
      message: "Couldn't find user registered with this email.",
    };
  } else {
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.toJSON().password
    );

    if (!isPasswordCorrect) {
      return {
        type: "Error",
        message: "Invalid password.",
      };
    } else {
      var role = "";
      
      const admin = Admin.findOne({ userID: user.id });

      if (admin) {
        role = "admin";
      } else {
        const workshopManager = WorkshopManager.findOne({ userId: user.id });

        if (workshopManager) {
          role = "workshopManager";
          
        } else {
          const customer = Customer.findOne({ userId: user.id });

          if (customer) {
            role = "customer";
          }
        }
      }

      const privateKey = JWTPRIVATEKEY;
      
      const token = await jwt.sign(
        { userID: user.id, role: role },
        privateKey,
        { algorithm: "RS256",
          expiresIn: "14d" }
      );

      return {
        type: "Success",
        message: "Successfully logged you in.",
        result: token,
      };
    }
  }
};

