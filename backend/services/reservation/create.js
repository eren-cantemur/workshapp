const {Reservation} = require('../../models')

exports.create = async (date,userId,workshopId) => {

    const createBody = {
        date : date,
        userId : userId,
        workshopId : workshopId
    }
    const result = await Reservation.create(
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
            message: `Reservation with id ${result.id} is created.`,
        };
    }
}
