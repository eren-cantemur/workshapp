const {Workshop} = require('../../models')

exports.create = async (name, capacity) => {

    const createBody = {
        name : name,
        capacity : capacity
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
            message: `Workshop with id ${result.id} is updated.`,
        };
    }
}

