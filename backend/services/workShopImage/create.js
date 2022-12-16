const {WorkshopImage} = require('../../models')

exports.create = async (path,workshopId) => {

    const createBody = {
        path : path,
        workshopId : workshopId
    }

    const result = await WorkshopImage.create(
        createBody
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while adding workshop image.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop Image with id ${result.id} is created.`,
            id: result.id,
        };
    }
}
