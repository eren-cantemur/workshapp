const {Review} = require('../../models')

exports.update = async (id, comment, rate, userId) => {

    const updateBody = {
        comment : comment,
        rate : rate,
        isApproved : 0
    }

    const findOptions = {
        where : {
            id :id,
            userId: userId
        }
    }
    const result = await Review.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating review.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Review with id ${id} is updated.`,
        };
    }
}
