const {User} = require('../../models')

exports.changeStatus = async (id, isApproved) => {

    const updateBody = {
        isApproved : isApproved
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
            message: `Error while updating User.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `User with id ${id} is updated.`,
        };
    }
}

