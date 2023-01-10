const { Workshop } = require('../../models')

exports.delete = async (id, managerId) => {

    const findOptions = {
        where: {
            id: id,
            workshopManagerId : managerId
        }
    }

    const result = await Workshop.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting workshop.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop with id ${id} is deleted.`,
        };
    }
}

