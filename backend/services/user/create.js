const {User} = require('../../models')

exports.create = async (email, password) => {

    const createBody = {
        email : email,
        password : password
    }

    const result = await User.create(
        createBody
    )

    if (!result) {
        return {
            type: "Error",
            message: `Error while creating user.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `User with id ${result.id} is created.`,
        };
    }
}

