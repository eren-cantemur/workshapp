const {Reservation} = require('../../models')

exports.getAll = async () => {
    const reservations = await Reservation.findAll()

    if (!reservations) {
        return {
            type: "Error",
            message: "Can not find any customer.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Customer array is added to result.",
            result: reservations
        };
    }
    
}
