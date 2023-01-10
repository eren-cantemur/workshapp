const { Review } = require('../../models')

exports.getAll = async () => {
    const reviews = await Review.findAll({include: { all: true, nested: true }})

    if (!reviews) {
        return {
            type: "Error",
            message: "Can not find any review.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Review array is added to result.",
            result: reviews
        };
    }
    
}
