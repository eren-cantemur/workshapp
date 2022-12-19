const { User, WorkshopManager, Admin, Customer } = require('../../models')
const bcrypt = require('bcrypt')
const SALTROUNDS = require('../../config/bcrypt.config').SALTROUNDS

exports.register = async (email, password, role) => {
  const user = await User.findOne({where : {email: email}});
  const hashedPassword = await bcrypt.hash(password, SALTROUNDS);

  var newUser;

  if (user !== null) {
    return {
      type: "Error",
      message: "An user is already registered with this email.",
    };
  } else {
    if (role === "customer") {
      newUser = await Customer.create({name: "",
        photo: "",
        user: {
          email: email,
          password: hashedPassword,
        }
      },{
        include: [{
          association: Customer.User,
        }]
      }
      );
    } else if (role === "admin") {
      newUser = await Admin.create({
        name: "",
        user: {
          email: email,
          password: hashedPassword,
        },
      },{
        include: [{
          association: Admin.User,
        }]
      }
      );
    } else if (role === "workshopManager") {
      newUser = await WorkshopManager.create({
        name: "",
        logo: "",
        phone: "",
        user: {
          email: email,
          password: hashedPassword,
        },
      },{
        include: [{
          association: WorkshopManager.User,
        }]
      }
      );
    } else {
      return {
        type: "Error",
        message: "Couldn't identify role.",
      };
    }
    
    return {
      type: "Success",
      message: `User is registered as ${role} with email: ${
        newUser.toJSON().user.email
      }`,
    };
  }
};
