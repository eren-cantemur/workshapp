const {Reservation} = require('../../models')

exports.getByUserId = async(userId) => {
    const findOptions = {
        where : {
            userId : userId
        }
    }

    const reservation = await Reservation.findAll(findOptions)

    if (!reservation) {
        return {
            type: "Error",
            message: `Can not find Reservation with name ${userId}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Reservations is added to result.",
            result: reservation
        };
    }
    
}

