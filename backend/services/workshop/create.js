const {Workshop} = require('../../models')

exports.create = async (name, capacity, description, photo, categoryId, managerId) => {

    const createBody = {
        name : name,
        capacity : capacity,
        description : description,
        photo : photo,
        categoryId : categoryId,
        workshopManagerId : managerId
    }

    const result = await Workshop.create(
        createBody
    )

    if (!result) {
        return {
            type: "Error",
            message: `Error while creating workshop.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop with id ${result.id} is created.`,
            id: result.id,
        };
    }
}

