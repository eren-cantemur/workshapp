const {User} = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            id: id
        }
    }

    const result = await User.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting user.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `User with id ${id} is deleted.`,
        };
    }
}

