const { User, WorkshopManager, Admin, Customer } = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../../config/jwt.config')

exports.login = async (email, password, role) => {
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
      var roleId = null;
      var admin;
      var workshopManager;
      var customer;

      if(role == "admin") {
        admin = await Admin.findOne({where: { userId: user.id}});
        if (admin != null) {
          roleId = admin.id;
        }
      }

      else if(role == "workshopManager") {
        workshopManager = await WorkshopManager.findOne({where: { userId: user.id }});
        if (workshopManager != null) {
          roleId = workshopManager.id;
        }
      }
      
      else if(role == "customer") {
        customer = await Customer.findOne({where: { userId: user.id }});
        if (customer != null) {
          roleId = customer.id;
        }
      }
      
      else{
        return {
          type: "Error",
          message: "Invalid role.",
        };
      }

      if (roleId == null){
        return {
          type: "Error",
          message: "Couldn't find role.",
        };
      }
    
      const privateKey = JWTPRIVATEKEY;
      
      const token = await jwt.sign(
        { userID: user.id, role: role, roleId: roleId },
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

