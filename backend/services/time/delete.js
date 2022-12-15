const { Time } = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            id: id
        }
    }

    const result = await Time.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting Time.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Time with id ${id} is deleted.`,
        };
    }
}
