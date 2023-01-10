const {WorkshopImage} = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            id: id
        }
    }

    const result = await WorkshopImage.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting workshop image.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop image with id ${id} is deleted.`,
        };
    }
}


