const { Reservation } = require('../../models')

exports.update = async (id, date, userId) => {

    const updateBody = {
        date: date
    }

    const findOptions = {
        where: {
            id: id,
            userId: userId
        }
    }

    const result = await Reservation.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating customer.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Reservation with id ${id} is updated.`,
        };
    }
}
