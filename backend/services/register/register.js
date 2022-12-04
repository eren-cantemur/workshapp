import { SALTROUNDS } from "../../config/bcrypt.config";
import { Admin } from "../../models/admin";
import { Customer } from "../../models/customer";
import { User } from "../../models/user";
import { WorkshopManager } from "../../models/workshopManager";

import * as bcrypt from "bcrypt";

register = async (email, password, role) => {
  const user = await User.findOne({ email: email });
  const hashedPassword = await bcrypt.hash(password, SALTROUNDS);

  var newUser;

  if (user !== null) {
    return {
      type: "Error",
      message: "An user is already registered with this email.",
    };
  } else {
    if (role === "customer") {
      newUser = Customer.create({
        name: "",
        photo: "",
        user: {
          email: email,
          password: hashedPassword,
        },
      });
    } else if (role === "admin") {
      newUser = Admin.create({
        name: "",
        user: {
          email: email,
          password: hashedPassword,
        },
      });
    } else if (role === "workshopManager") {
      newUser = WorkshopManager.create({
        name: "",
        logo: "",
        phone: "",
        user: {
          email: email,
          password: hashedPassword,
        },
      });
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

module.exports = { register };
