import { User } from "../../models/user";
import { jwt } from "jsonwebtoken";

login = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (user === null) {
    return {
        type: "Error",
        message: "Couldn't find user registered with this email."
    }
  }
  else {
    
  }
};

module.exports = { login };
