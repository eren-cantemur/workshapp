const {Review} = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            id : id
        }
    }

    const review = await Review.findOne(findOptions)

    if (!review) {
        return {
            type: "Error",
            message: `Can not find review with id ${id}.`,
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