const {Review} = require('../../models')

exports.getByWorkshopId = async(workshopId) => {

    const findOptions = {
        where : {
            workshopId : workshopId
        }
    }

    const review = await Review.findAll(findOptions)

    if (!review) {
        return {
            type: "Error",
            message: `Can not find review with workshop id ${workshopId}.`,
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
