import { User } from "../../models/user";
import { jwt } from "jsonwebtoken";

register = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (user !== null) {
    return {
      type: "Error",
      message: "An user is already registered with this email.",
    };
  } else {
    const user = User.create({ email, password });

    return {
      type: "Success",
      message: `User is registered with email: ${user.toJSON().email}`,
    };
  }
};

module.exports = { register };
