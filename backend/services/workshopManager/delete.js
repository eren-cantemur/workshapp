const {WorkshopManager} = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            userId: id
        }
    }

    const result = await WorkshopManager.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting workshop manager.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop manager with id ${id} is deleted.`,
        };
    }
}


