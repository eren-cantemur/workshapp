const {Review} = require('../../models')

exports.update = async (id, comment, rate) => {

    
    const updateBody = {
        comment : comment,
        rate : rate
    }

    const findOptions = {
        where : {
            id :id
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
