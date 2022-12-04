const {WorkShopManager} = require('../../models')

exports.update = async (name,logo, photo) => {

    const updateBody = {
        name : name,
        logo : logo,
        photo : photo
    }

    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await Workshop.update(
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

