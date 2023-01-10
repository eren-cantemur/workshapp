const {Workshop} = require('../../models')

exports.update = async (id,name, capacity,description, photo, managerId, categoryId, addressId) => {

    const updateBody = {
        name : name,
        capacity : capacity,
        description : description,
        photo : photo,
        categoryId : categoryId,
        addressId : addressId
    }

    const findOptions = {
        where : {
            id : id,
            workshopManagerId : managerId
        }
    }

    const result = await Workshop.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating workshop.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Workshop with id ${id} is updated.`,
        };
    }
}

