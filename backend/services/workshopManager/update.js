const {WorkshopManager} = require('../../models')

exports.update = async (id,name,logo,photo,description) => {

    const updateBody = {
        name : name,
        logo : logo,
        photo : photo,
        description: description
    }

    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await WorkshopManager.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating manager.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Manager with id ${id} is updated.`,
        };
    }
}
