const {Review} = require('../../models')

exports.getByUserId = async(userId) => {

    const findOptions = {
        where : {
            userId : userId
        }
    }

    const review = await Review.findOne(findOptions)

    if (!review) {
        return {
            type: "Error",
            message: `Can not find review with name ${name}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Review is added to result.",
            result: review
        };
    }
}