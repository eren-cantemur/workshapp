const { Review } = require('../../models')

exports.delete = async (id) => {

    const findOptions = {
        where: {
            id: id
        }
    }

    const result = await Review.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting review.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Review with id ${id} is deleted.`,
        };
    }
}
