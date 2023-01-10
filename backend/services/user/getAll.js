const {User} = require('../../models')

exports.getAll = async () => {
    const users = await User.findAll()

    if (!users) {
        return {
            type: "Error",
            message: "Can not find any user.",
        };
    }
    else {
        return {
            type: "Success",
            message: "User array is added to result.",
            result: users
        };
    }
    
}
