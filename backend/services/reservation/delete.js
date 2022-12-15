const {Reservation} = require('../../models')

exports.delete = async (id) => {
    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await Reservation.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting customer.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Reservation with id ${id} is deleted.`,
        };
    }
    
}
