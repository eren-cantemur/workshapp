const {Reservation} = require('../../models')

exports.getByUserId = async(userId) => {
    const findOptions = {
        where : {
            userId : userId
        }
    }

    const reservation = await Reservation.findOne(findOptions)

    if (!reservation) {
        return {
            type: "Error",
            message: `Can not find Customer with name ${userId}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Customer is added to result.",
            result: reservation
        };
    }
    
}

