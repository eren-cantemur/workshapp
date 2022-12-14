const {Workshop} = require('../../models')

exports.changeStatus = async (id, isApproved) => {

    const updateBody = {
        isApproved : isApproved
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

