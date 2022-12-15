const {Review} = require('../../models')

exports.getByUserId = async(userId) => {

    const findOptions = {
        where : {
            userId : userId
        }
    }

    const review = await Review.findAll(findOptions)

    if (!review) {
        return {
            type: "Error",
            message: `Can not find review with user id ${userId}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Reviews are added to result.",
            result: review
        };
    }
}
