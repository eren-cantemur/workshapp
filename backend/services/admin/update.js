const { Admin } = require('../../models')

exports.update = async (name, id) => {

    const updateBody = {
        name: name
    }
    const findOptions = {
        where: {
            userId: id
        }
    }

    const result = await Admin.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating admin.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Admin with id ${id} is updated.`,
        };
    }
        
}
