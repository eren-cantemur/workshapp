const {Review} = require('../../models')

exports.changeStatus = async (id, isApproved) => {

    const updateBody = {
        isApproved : isApproved
    }

    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await Review.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating Review.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Review with id ${id} is updated.`,
        };
    }
}

