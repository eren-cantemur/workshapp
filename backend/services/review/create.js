const {Review, Workshop} = require('../../models')

exports.create = async (comment, rate,userId,workshopId) => {

    const createBody = {
        comment : comment,
        rate : rate,
        userId : userId,
        workshopId : workshopId
    }
    const result = await Review.create(
        createBody,
        {
            include : [Workshop]
        }
    )
    if (!result) {
        return {
            type: "Error",
            message: `Error while updating review.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Review with id ${result.id} is created.`,
            id: result.id,
        };
    }
}
