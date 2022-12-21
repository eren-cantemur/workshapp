const { User } = require('../../models')

exports.update = async (id, email, password) => {

    const updateBody = {
        email : email,
        password : password
    }

    const findOptions = {
        where : {
            id : id
        }
    }
    const result = await User.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating user.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `User with id ${id} is updated.`,
        };
    }
}