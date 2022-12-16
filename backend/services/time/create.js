const {Time} = require('../../models')

exports.create = async (date, repetation,workshopId) => {

    const createBody = {
        date: date,
        repetation : repetation,
        workshopId : workshopId
    }
    const result = await Time.create(
        createBody
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
            message: `Time with id ${result.id} is created.`,
            id: result.id,
        };
    }
}
