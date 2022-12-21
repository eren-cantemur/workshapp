const { Admin } = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            id: id
        }
    }

    const result = await Admin.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting admin.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Admin with id ${id} is deleted.`,
        };
    }
}
